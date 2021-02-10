
import  React   from 'react'

export default function useFormatDate(timeStamp) {

  const [date, setDate] = React.useState();
  
  const format = (timeStamp) => {
    let dateFormat = new Date(timeStamp);
    const meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    let month = meses[dateFormat.getMonth()];
    let day = dateFormat.getDate();
    let year = dateFormat.getFullYear();
    let hour = dateFormat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    setDate(`${day} ${month} ${year} ${hour}`);
    console.log(date)
  }

   React.useEffect(() => {
    format(timeStamp)

   }, [])

 return date;
}

    
  