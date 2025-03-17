import {supabase} from './client';

export async function searchSoftware(searchTerm) {
    if (!searchTerm) return [];
  
    const { data, error } = await supabase
    .rpc('search_software', {
      search_query: searchTerm
    });
  
    if (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  
    return data;
  }