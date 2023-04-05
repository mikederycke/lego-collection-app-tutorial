import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import LegoSetRow from './legoSetRow';
import LegoSet from './legoSet';
import styles from './legoSetsTable.module.css'
import legodata from '../data/legodata.json'


function LegoSetsTable(props) {

  const [selectedSet, setSelectedSet] = useState(null)
  const [list, setList] = useState(legodata)

  function handleRowClick(e){
    console.log(e) //Set ID
    setSelectedSet(list.find(ele => ele.setId == e))
  }

  function handleListClick(e){
    // Only add if there are less than 3 items
    console.log("click")
    if(list.length < 3){
      let newList = [...list];
      newList.push({
        setId: 3,
        name: "Sanctum Sanctorum",
        yearReleased: 2022,
        parts: 2713,
        complete: true,
        imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt5157080434f0c032/76218.png"
      })
      setList(newList)
    }
  }
  return (
    //Example css use
    <div className={styles.back}>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Set ID</th>
            <th>Name</th>
            <th>Year Released</th>
            <th>Parts</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((legoSet) => (
            <LegoSetRow set={legoSet} color="red" key={legoSet.setId}
              onClick={handleRowClick}/>
          ))}
        </tbody>
      </Table>
     
      <Button variant="primary" onClick={handleListClick}>Add Sanctum Sanctorum Set</Button>
      <hr></hr>
      { selectedSet ? <LegoSet {...selectedSet} /> : ""}
    </div>
  );
}

export default LegoSetsTable;
