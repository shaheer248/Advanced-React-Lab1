function DessertsList(props) {

  const dessertsList = props.data;
  const sortedList = dessertsList.filter(desserts => desserts.calories < 500).sort((a,b)=> a.calories - b.calories)
  
  return (
    <ul>
      {sortedList.map(desserts => {
        return <li>{desserts.name} - {desserts.calories} cal</li>
      }
      )}
   </ul>
  )
}

export default DessertsList;
