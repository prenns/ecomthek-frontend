export default function FormattedDate({ dateString, className }) {
    const formatted = new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateString));
  
    return <time className={className} dateTime={dateString}>{formatted}</time>;
  }