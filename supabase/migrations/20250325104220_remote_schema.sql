

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE TYPE "public"."integration_type" AS ENUM (
    'native',
    'middleware',
    'custom',
    'none'
);


ALTER TYPE "public"."integration_type" OWNER TO "postgres";


CREATE TYPE "public"."status" AS ENUM (
    'active',
    'inactive',
    'draft',
    'archived'
);


ALTER TYPE "public"."status" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."core_update_search_column"("target_software_id" integer) RETURNS "void"
    LANGUAGE "plpgsql"
    AS $$BEGIN

    UPDATE software
    SET search_column = CONCAT(
        -- Name + Beschreibung + Keywords
        COALESCE(name, ''), ' ',
        COALESCE(description, ''), ' ',

             -- ✅ Kategorie direkt aus der software_category-Tabelle ziehen
        COALESCE((
            SELECT c.name
            FROM software_category c
            WHERE c.id = software_category_id
        ), ''), ' ',

        -- Features direkt aus der Datenbank ziehen
        COALESCE((
            SELECT STRING_AGG(f.name, ' ')
            FROM software_software_feature ssf
            JOIN software_feature f ON ssf.software_feature_id = f.id
            WHERE ssf.software_id = target_software_id
        ), ''), ' ',

        -- Probleme direkt aus der Datenbank ziehen
        COALESCE((
            SELECT STRING_AGG(p.name, ' ')
            FROM software_problems sp
            JOIN problems p ON sp.problem_id = p.id
            WHERE sp.software_id = target_software_id
        ), ''), ' ',

        -- ✅ Tags aus der search_tags-Spalte hinzufügen
        COALESCE(ARRAY_TO_STRING(search_tags, ' '), '')
    )
    WHERE id = target_software_id;

    -- ✅ Direkt auch search_vector aktualisieren
    UPDATE software
    SET search_vector = to_tsvector('german', search_column)
    WHERE id = target_software_id;

    RETURN;

END;$$;


ALTER FUNCTION "public"."core_update_search_column"("target_software_id" integer) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."search_software"("search_query" "text") RETURNS TABLE("id" bigint, "name" "text", "slug" "text", "description" "text", "rank" real)
    LANGUAGE "plpgsql"
    AS $_$BEGIN
  -- ✅ Sonderzeichen entfernen und mehrfachen Leerraum bereinigen
  search_query := regexp_replace(
    search_query, 
    '[-"''!@#\$%\^&\*\(\)_\+\=\{\}\[\]:;<>,\.?/]', 
    ' ', 
    'g'
  );

  -- ✅ Doppelte Leerzeichen entfernen
  search_query := regexp_replace(search_query, '\s+', ' ', 'g');

  -- ✅ Leerzeichen am Anfang und Ende entfernen
  search_query := trim(search_query);

  -- ✅ Falls der String nach der Bereinigung leer ist → Abbruch, um Fehler zu vermeiden
  IF search_query = '' THEN
    RETURN;
  END IF;
  RETURN QUERY
  SELECT s.id,
         s.name,
         s.slug,
         s.description,
         ts_rank(s.search_vector, to_tsquery('german', search_query || ':*')) AS rank
  FROM software s
  WHERE (s.search_vector @@ to_tsquery('german', search_query || ':*')
     OR s.search_column ILIKE '%' || search_query || '%')
     AND s.status = 'active'
  ORDER BY rank DESC; -- 🔥 Nach Relevanz sortieren
END;$_$;


ALTER FUNCTION "public"."search_software"("search_query" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_all_search_columns"() RETURNS "void"
    LANGUAGE "plpgsql"
    AS $$
DECLARE 
    r RECORD;
BEGIN
    FOR r IN SELECT id FROM software LOOP
        -- ✅ Explizit zu INT umwandeln
        PERFORM core_update_search_column(r.id::INT);
    END LOOP;
END;
$$;


ALTER FUNCTION "public"."update_all_search_columns"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_software_search_column"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$DECLARE
    target_software_id INT;
BEGIN

 -- ID zuweisen (abhängig davon, von welcher Tabelle der Trigger ausgelöst wird)
    IF TG_TABLE_NAME = 'software' THEN
       IF TG_OP = 'DELETE' THEN
            target_software_id := OLD.id;
        ELSE
            target_software_id := NEW.id;
        END IF;
       
    ELSE
        IF TG_OP = 'DELETE' THEN
            target_software_id := OLD.software_id;
        ELSE
            target_software_id := NEW.software_id;
        END IF;
    END IF;

    PERFORM core_update_search_column(target_software_id);
    RETURN NEW;

END;$$;


ALTER FUNCTION "public"."update_software_search_column"() OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."category_shopsystem" (
    "software_category_id" bigint NOT NULL,
    "shop_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "seo_title" "text",
    "title" "text",
    "seo_description" "text",
    "seo_meta_description" "text",
    "description" "text"
);


ALTER TABLE "public"."category_shopsystem" OWNER TO "postgres";


ALTER TABLE "public"."category_shopsystem" ALTER COLUMN "software_category_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."category_shopsystem_sotware_category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."expert_software_rating" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "software_id" bigint,
    "overall_score" real,
    "summary" "text",
    "functionality_score" real,
    "usability_score" real,
    "integrations_compatibility_score" real,
    "value_for_money_score" real,
    "support_community_score" real,
    "performance_stability_score" real,
    "innovation_future_proof_score" real,
    "final_verdict" "text",
    "functionality_text" "text",
    "usability_text" "text",
    "integrations_compatibility_text" "text",
    "value_for_money_text" "text",
    "support_community_text" "text",
    "performance_stability_text" "text",
    "innovation_future_proof_text" "text"
);


ALTER TABLE "public"."expert_software_rating" OWNER TO "postgres";


ALTER TABLE "public"."expert_software_rating" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."expert_software_rating_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."problems" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "description" "text",
    "slug" "text",
    "solution" "text"
);


ALTER TABLE "public"."problems" OWNER TO "postgres";


ALTER TABLE "public"."problems" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."problems_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "description" "text",
    "website_url" "text",
    "logo_url" "text",
    "slug" "text",
    "features_text" "text",
    "problems_text" "text",
    "for_text" "text",
    "description_headline" "text",
    "cta_text" "text",
    "search_column" "text",
    "search_vector" "tsvector",
    "software_category_id" bigint,
    "search_tags" "text"[],
    "status" "public"."status"
);


ALTER TABLE "public"."software" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."software_category" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text",
    "slug" "text",
    "description" "text",
    "seo_description" "text",
    "seo_title" "text",
    "seo_meta_description" "text"
);


ALTER TABLE "public"."software_category" OWNER TO "postgres";


ALTER TABLE "public"."software_category" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_category_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_feature" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "name" "text"
);


ALTER TABLE "public"."software_feature" OWNER TO "postgres";


ALTER TABLE "public"."software_feature" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_feature_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE "public"."software" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_integration" (
    "software_id" bigint NOT NULL,
    "integrated_with_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "integration_type" "public"."integration_type",
    "description" "text"
);


ALTER TABLE "public"."software_integration" OWNER TO "postgres";


ALTER TABLE "public"."software_integration" ALTER COLUMN "software_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_integrationj_software_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_problems" (
    "software_id" bigint NOT NULL,
    "problem_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."software_problems" OWNER TO "postgres";


ALTER TABLE "public"."software_problems" ALTER COLUMN "software_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_problems_software_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_procons" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "software_id" bigint,
    "type" "text",
    "name" "text"
);


ALTER TABLE "public"."software_procons" OWNER TO "postgres";


ALTER TABLE "public"."software_procons" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_procons_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_software_feature" (
    "software_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "software_feature_id" bigint NOT NULL
);


ALTER TABLE "public"."software_software_feature" OWNER TO "postgres";


ALTER TABLE "public"."software_software_feature" ALTER COLUMN "software_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_software_feature_software_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_software_suitability" (
    "software_id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "software_suitability_id" bigint NOT NULL,
    "description" "text",
    "is_suitable" boolean
);


ALTER TABLE "public"."software_software_suitability" OWNER TO "postgres";


ALTER TABLE "public"."software_software_suitability" ALTER COLUMN "software_id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_software_suitability_software_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



CREATE TABLE IF NOT EXISTS "public"."software_suitability" (
    "id" bigint NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "type" "text"
);


ALTER TABLE "public"."software_suitability" OWNER TO "postgres";


ALTER TABLE "public"."software_suitability" ALTER COLUMN "id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME "public"."software_suitability_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);



ALTER TABLE ONLY "public"."category_shopsystem"
    ADD CONSTRAINT "category_shopsystem_pkey" PRIMARY KEY ("software_category_id", "shop_id");



ALTER TABLE ONLY "public"."expert_software_rating"
    ADD CONSTRAINT "expert_software_rating_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."problems"
    ADD CONSTRAINT "problems_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."software_category"
    ADD CONSTRAINT "software_category_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."software_feature"
    ADD CONSTRAINT "software_feature_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."software_integration"
    ADD CONSTRAINT "software_integration_pkey" PRIMARY KEY ("software_id", "integrated_with_id");



ALTER TABLE ONLY "public"."software"
    ADD CONSTRAINT "software_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."software_problems"
    ADD CONSTRAINT "software_problems_pkey" PRIMARY KEY ("software_id", "problem_id");



ALTER TABLE ONLY "public"."software_procons"
    ADD CONSTRAINT "software_procons_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."software_software_feature"
    ADD CONSTRAINT "software_software_feature_pkey" PRIMARY KEY ("software_id", "software_feature_id");



ALTER TABLE ONLY "public"."software_software_suitability"
    ADD CONSTRAINT "software_software_suitability_pkey" PRIMARY KEY ("software_id", "software_suitability_id");



ALTER TABLE ONLY "public"."software_suitability"
    ADD CONSTRAINT "software_suitability_pkey" PRIMARY KEY ("id");



CREATE INDEX "software_search_vector_idx" ON "public"."software" USING "gin" ("search_vector");



ALTER TABLE ONLY "public"."category_shopsystem"
    ADD CONSTRAINT "category_shopsystem_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."category_shopsystem"
    ADD CONSTRAINT "category_shopsystem_software_category_id_fkey" FOREIGN KEY ("software_category_id") REFERENCES "public"."software_category"("id");



ALTER TABLE ONLY "public"."expert_software_rating"
    ADD CONSTRAINT "expert_software_rating_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_integration"
    ADD CONSTRAINT "software_integration_integrated_with_id_fkey" FOREIGN KEY ("integrated_with_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_integration"
    ADD CONSTRAINT "software_integration_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_problems"
    ADD CONSTRAINT "software_problems_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id");



ALTER TABLE ONLY "public"."software_problems"
    ADD CONSTRAINT "software_problems_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_procons"
    ADD CONSTRAINT "software_procons_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software"
    ADD CONSTRAINT "software_software_category_id_fkey" FOREIGN KEY ("software_category_id") REFERENCES "public"."software_category"("id");



ALTER TABLE ONLY "public"."software_software_feature"
    ADD CONSTRAINT "software_software_feature_software_feature_id_fkey" FOREIGN KEY ("software_feature_id") REFERENCES "public"."software_feature"("id");



ALTER TABLE ONLY "public"."software_software_feature"
    ADD CONSTRAINT "software_software_feature_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_software_suitability"
    ADD CONSTRAINT "software_software_suitability_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "public"."software"("id");



ALTER TABLE ONLY "public"."software_software_suitability"
    ADD CONSTRAINT "software_software_suitability_software_suitability_id_fkey" FOREIGN KEY ("software_suitability_id") REFERENCES "public"."software_suitability"("id");



CREATE POLICY "Enable read access for all users" ON "public"."category_shopsystem" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."expert_software_rating" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."problems" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_category" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_feature" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_integration" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_problems" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_procons" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_software_feature" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_software_suitability" FOR SELECT USING (true);



CREATE POLICY "Enable read access for all users" ON "public"."software_suitability" FOR SELECT USING (true);



ALTER TABLE "public"."category_shopsystem" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."expert_software_rating" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."problems" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_category" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_feature" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_integration" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_problems" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_procons" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_software_feature" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_software_suitability" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."software_suitability" ENABLE ROW LEVEL SECURITY;




ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";


GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";




















































































































































































GRANT ALL ON FUNCTION "public"."core_update_search_column"("target_software_id" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."core_update_search_column"("target_software_id" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."core_update_search_column"("target_software_id" integer) TO "service_role";



GRANT ALL ON FUNCTION "public"."search_software"("search_query" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."search_software"("search_query" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."search_software"("search_query" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."update_all_search_columns"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_all_search_columns"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_all_search_columns"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_software_search_column"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_software_search_column"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_software_search_column"() TO "service_role";


















GRANT ALL ON TABLE "public"."category_shopsystem" TO "anon";
GRANT ALL ON TABLE "public"."category_shopsystem" TO "authenticated";
GRANT ALL ON TABLE "public"."category_shopsystem" TO "service_role";



GRANT ALL ON SEQUENCE "public"."category_shopsystem_sotware_category_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."category_shopsystem_sotware_category_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."category_shopsystem_sotware_category_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."expert_software_rating" TO "anon";
GRANT ALL ON TABLE "public"."expert_software_rating" TO "authenticated";
GRANT ALL ON TABLE "public"."expert_software_rating" TO "service_role";



GRANT ALL ON SEQUENCE "public"."expert_software_rating_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."expert_software_rating_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."expert_software_rating_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."problems" TO "anon";
GRANT ALL ON TABLE "public"."problems" TO "authenticated";
GRANT ALL ON TABLE "public"."problems" TO "service_role";



GRANT ALL ON SEQUENCE "public"."problems_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."problems_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."problems_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software" TO "anon";
GRANT ALL ON TABLE "public"."software" TO "authenticated";
GRANT ALL ON TABLE "public"."software" TO "service_role";



GRANT ALL ON TABLE "public"."software_category" TO "anon";
GRANT ALL ON TABLE "public"."software_category" TO "authenticated";
GRANT ALL ON TABLE "public"."software_category" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_category_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_category_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_category_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_feature" TO "anon";
GRANT ALL ON TABLE "public"."software_feature" TO "authenticated";
GRANT ALL ON TABLE "public"."software_feature" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_feature_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_feature_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_feature_id_seq" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_integration" TO "anon";
GRANT ALL ON TABLE "public"."software_integration" TO "authenticated";
GRANT ALL ON TABLE "public"."software_integration" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_integrationj_software_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_integrationj_software_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_integrationj_software_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_problems" TO "anon";
GRANT ALL ON TABLE "public"."software_problems" TO "authenticated";
GRANT ALL ON TABLE "public"."software_problems" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_problems_software_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_problems_software_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_problems_software_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_procons" TO "anon";
GRANT ALL ON TABLE "public"."software_procons" TO "authenticated";
GRANT ALL ON TABLE "public"."software_procons" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_procons_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_procons_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_procons_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_software_feature" TO "anon";
GRANT ALL ON TABLE "public"."software_software_feature" TO "authenticated";
GRANT ALL ON TABLE "public"."software_software_feature" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_software_feature_software_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_software_feature_software_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_software_feature_software_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_software_suitability" TO "anon";
GRANT ALL ON TABLE "public"."software_software_suitability" TO "authenticated";
GRANT ALL ON TABLE "public"."software_software_suitability" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_software_suitability_software_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_software_suitability_software_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_software_suitability_software_id_seq" TO "service_role";



GRANT ALL ON TABLE "public"."software_suitability" TO "anon";
GRANT ALL ON TABLE "public"."software_suitability" TO "authenticated";
GRANT ALL ON TABLE "public"."software_suitability" TO "service_role";



GRANT ALL ON SEQUENCE "public"."software_suitability_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."software_suitability_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."software_suitability_id_seq" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;
