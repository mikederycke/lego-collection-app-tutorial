const LegoSetRow = (props) => {
    let complete;
    if(props.set.complete) 
        complete = <td className="text-primary">{props.set.complete ? 'Yes' : 'No'}</td>
    else
        complete = <td className="text-danger">{props.set.complete ? 'Yes' : 'No'}</td>


    return ( 
        <tr key={props.set.setId} onClick={() => props.onClick(props.set.setId)}>
            <td>{props.set.setId}</td>
            <td>{props.set.name}</td>
            <td>{props.set.yearReleased}</td>
            <td>{props.set.parts}</td>
            {complete}
        </tr>
     );
}
 
export default LegoSetRow;