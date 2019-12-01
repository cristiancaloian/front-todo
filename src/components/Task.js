import React from 'react'

class Task extends React.Component{

constructor(props){
    super(props);
    this.state={
        newItem:"",
        list:[],
        checked: false
    }
this.clickBif=this.clickBif.bind(this);
}

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }
    addItem(){
        
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        if(newItem.value){
        const list = [...this.state.list];
        list.push(newItem);
        this.setState({
            list,
            newItem: ""
            
        });
    } else {
        return;
    }
    }
    
    deleteItem(id){
        const list = [...this.state.list]
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList});
    }

    clickBif(){
       
        this.setState({
            checked: !this.state.checked
        });  
    }

    render(){


        return(
            <div className="task-box">
                <div className="test">
                ADD TASK BELOW:
                <br/>
                <input 
                className="input-task"
                type="text" 
                name="" 
                id=""
                placeholder="Insert here:"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
                />

                <button className="add-btn"
                onClick={()=> this.addItem()}
                >ADD
                </button>

                </div>
                <br/>
                <ul className="task-ul">
                    {
                        this.state.list.map(item =>{
                            return(
                                <li key={item.id}  
                                className="task-li-true">
                                    <label For={item.id}>
                                    <input type="checkbox" name="check" id={item.id}
                                    onClick={()=> this.clickBif()}/>
                                    </label>
                                    <p >
                                         {item.value}
                                    </p>
                                    
                                    <button
                                    onClick={()=> this.deleteItem(item.id)}
                                    >DEL
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Task