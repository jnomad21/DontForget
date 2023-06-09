export default function EventDate({event}){
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const formattedDate = event.toLocaleDateString(undefined, dateOptions);
  
    return (
      <>
      {formattedDate}
      </>
  )
};
  
 
  