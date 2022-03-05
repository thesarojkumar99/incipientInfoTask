import React,{useState} from "react";
import {FormControl,Container,Row,Col,Button, Alert, Table} from "react-bootstrap";
import uniqid from 'uniqid';


function Home() {
    const [allList, setAllList]=useState([]);
    const [todoName, setTodoName]=useState('');
    const [isUpdate,setIsUpdate]=useState(false);
    const [error, setError] = useState(false)
  
    const inputChangeHandler=(e)=>{
      setTodoName(e.target.value)
    };

    const addSubmitHandler = (e)=>{
      // debugger
      e.preventDefault();
      if(!todoName){
        setError(true);
      }else{
        setError(false)
        setAllList([...allList,{newTodo:todoName, id:uniqid()}]);
        setTodoName("")
      }
    };

    const editHandler = (id)=>{
      //debugger
      setIsUpdate(true)
      if(id){
          const updatedTodoList = allList.filter((x)=> x.id === id);
          setTodoName(updatedTodoList[0].newTodo);
          setIsUpdate(false)
        }
 };

    const deleteHandler = (id)=>{
      // debugger
      if(id){
        const updatedTodoList = allList.filter((x)=> x.id !== id);
        setAllList([...updatedTodoList])
      }
    };
    
  return (
    <Container fluid>
      <Row>
        <Col> <h3>To Do List</h3></Col>
      </Row>
      <Row>
        <Col>  
          <FormControl
            placeholder="New Task"
            aria-label="NewTask"
            aria-describedby="basic-addon1"
            onChange={inputChangeHandler}
            name="todoName"
            value={todoName}
          />
          {error && <Alert variant="danger"> Can't Left Blank </Alert>}
        </Col>
        <Col><Button variant="secondary" onClick={addSubmitHandler}>{isUpdate ? "Edit":"Add"}</Button></Col>
      </Row>
      <Row>
         <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {allList.length > 0 &&
                  allList.map((item,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.newTodo}</td>
                      <td><i className="fa fa-pencil" aria-hidden="true" onClick={(e)=>editHandler(item.id)} /></td>
                      <td ><i className="fa fa-trash" aria-hidden="true" onClick={(e)=>deleteHandler(item.id)} /></td>
                  </tr>
                  ))
                }
            </tbody>
          </Table>
      </Row>
    </Container>
  );
}

export default Home;

