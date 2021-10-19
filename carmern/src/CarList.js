import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import './App.css';

export class CarList extends Component {
    constructor(props) {
        super(props)
        //state variables for CarList class
        this.state = {
            logs: [],
            show: false,
            modelValue: '',
            updatedModel: '',
            makeValue: '',
            updatedMake: '',
            colorValue: '',
            updatedColor: '',
            regValue: '',
            updatedReg: '',
            ownerValue: '',
            updatedOwner: '',
            addrValue: '',
            updatedAddress: '',
            filterValue: '',
            logItem: [],
            filtered: [] 
        }
        //binding of all methods used to track and change state of respective variables
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleModalShow = this.handleModalShow.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleRegChange = this.handleRegChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
        this.handleColorUpdate = this.handleColorUpdate.bind(this);
        this.handleMakeUpdate = this.handleMakeUpdate.bind(this);
        this.handleModelUpdate = this.handleModelUpdate.bind(this);
        this.handleOwnerUpdate = this.handleOwnerUpdate.bind(this);
        this.handleRegUpdate = this.handleRegUpdate.bind(this);
    }


    handleModalShow = () => {

        //change the state of 'show' which will trigger the modal for the updating of a record
        this.setState({
            show: true
        });
        //set the state of the 'updated' items to the target values which are stored in the logItem variable
        this.setState({
            updatedModel: this.state.logItem.model,
            updatedMake: this.state.logItem.make,
            updatedColor: this.state.logItem.color,
            updatedReg: this.state.logItem.registration,
            updatedOwner: this.state.logItem.owner,
            updatedAddress: this.state.logItem.address
        });
    }
    //change the state of 'show' to close the modal
    handleModalClose = () => {

        this.setState({
            show: false
        });
    }
    //on load, get al the current vehicle records from the database and assign the returned object to the logs property
    componentDidMount() {

        fetch('/api/home')
        .then(res => res.json())
        .then((result) => {
            this.setState({
                logs: result
            })
        });
    }
    //track the value input for vehicle model
    //assign to 'modelValue' property
    //to be used to create a new car record
    handleModelChange = (e) => {

        let modelInput = e.target.value;

        this.setState({
            modelValue: modelInput
        });
    }
    //track the value input for vehicle make
    //assign to 'makeValue' property
    //to be used to create a new car record
    handleMakeChange = (e) => {

        let makeInput = e.target.value;

        this.setState({
            makeValue: makeInput
        });
    }
    //track the value input for vehicle color
    //assign to 'colorValue' property
    //to be used to create a new car record
    handleColorChange = (e) => {

        let colorInput = e.target.value;

        this.setState({
            colorValue: colorInput
        });
    }
    //track the value input for vehicle resistration
    //assign to 'modelValue' property
    //to be used to create a new car record
    handleRegChange = (e) => {

        let regInput = e.target.value;

        this.setState({
            regValue: regInput
        });
    }
    //track the value input for vehicle owner
    //assign to 'ownerValue' property
    //to be used to create a new car record
    handleOwnerChange = (e) => {

        let ownerInput = e.target.value;

        this.setState({
            ownerValue: ownerInput
        });
    }
    //track the value input for vehicle owner address
    //assign to 'addrValue' property
    //to be used to create a new car record
    handleAddressChange = (e) => {

        let addrInput = e.target.value;

        this.setState({
            addrValue: addrInput
        });
    }
    //track the value input for vehicle model (input in modal)
    //assign to 'updatedModel' property
    //to be used to update a car record
    handleModelUpdate = (e) => {

        let modalModel= e.target.value;

        this.setState({
            updatedModel: modalModel
        });
    }
    //track the value input for vehicle make (input in modal)
    //assign to 'updatedMake' property
    //to be used to update a car record
    handleMakeUpdate = (e) => {

        let modalMake = e.target.value;

        this.setState({
            updatedMake: modalMake
        });
    }
    //track the value input for vehicle color (input in modal)
    //assign to 'updatedColor' property
    //to be used to update a car record
    handleColorUpdate = (e) => {

        let modalColor = e.target.value;

        this.setState({
            updatedColor: modalColor
        });
    }
    //track the value input for vehicle registration (input in modal)
    //assign to 'updatedReg' property
    //to be used to update a car record
    handleRegUpdate = (e) => {

        let modalReg = e.target.value;

        this.setState({
            updatedReg: modalReg
        });
    }
    //track the value input for vehicle owner (input in modal)
    //assign to 'updatedOwner' property
    //to be used to update a car record
    handleOwnerUpdate = (e) => {

        let modalOwner = e.target.value;

        this.setState({
            updatedOwner: modalOwner
        });
    }
    //track the value input for vehicle owner address (input in modal)
    //assign to 'updatedAddress' property
    //to be used to update a car record
    handleAddressUpdate = (e) => {

        let modalAddress = e.target.value;

        this.setState({
            updatedAddress: modalAddress
        });
    }
    //method to track the value input used for filtering records by age of vehicles in years
    handleFilterChange = (e) => {

        let filterInput = e.target.value;

        this.setState({
            filterValue: filterInput
        });
    }
    //submit method below creates a new car object populated with values stored in respective properties
    handleSubmit = (e) => {
        e.preventDefault();

        let newCar = {
            modelValue: this.state.modelValue,
            makeValue: this.state.makeValue,
            colorValue: this.state.colorValue,
            regValue: this.state.regValue,
            ownerValue: this.state.ownerValue,
            addrValue: this.state.addrValue
        }
        //using the fetch method to send a post request to the server and sending the new car object created in ther body property
        fetch('/api/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(
            alert(`Item Created Successfully!!`)
        )
        .then(
            window.location.reload()
        )
    }
    //track the registration of the targetted object to be updated
    //this method also changes the state of the 'show' property which opens the modal element
    handleUpdate = (e) => {

        let regVal = e.target.value;

        let targetItem = this.state.logs.find(car => car.registration === regVal);

        this.setState({
            logItem: targetItem
        });

        this.setState({
            show: true
        });
    }
    //updated information: each property is assigned their new/inital values
    //these values are used to created a new object which will be used in the body of the put request
    handleUpdateSubmit = (e) => {

        let updateCar = {
            modelValue: this.state.updatedModel,
            makeValue: this.state.updatedMake,
            colorValue: this.state.updatedColor,
            regValue: this.state.updatedReg,
            ownerValue: this.state.updatedOwner,
            addrValue: this.state.updatedAddress,
            targetReg: this.state.logItem.registration
        }

        fetch('/api/update', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCar)
        })
        .then(res => res.json())
        .then((result) => {
            alert(`Item logged Successful!!`)
        })
        .then(
            this.setState({
                show: false
            })
        )
        .then(
            window.location.reload()
        );
    }
    //get the registration of the targetted object to be deleted
    //use the registration value to locate the desired object in the current logs and then
    //send the delete request
    handleDelete = (e) => {

        let regVal = e.target.value;

        let targetItem = this.state.logs.find(car => car.registration === regVal);

        let confirmDelete = window.confirm('Are you sure you want to delete this item?');

        if (confirmDelete) {
            fetch('/api/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(targetItem)
            })
            .then(
                alert(`Item delete Successful!!`)
            )
            .then(
                window.location.reload()
            );
        }
    }
    //filter records by date and
    //assign filtered array to 'filtered' property
    handleFilterSubmit = (e) => {
        e.preventDefault();

        let date = new Date();
        let currYear = date.getFullYear(); 
        let logFrom = this.state.logs;
        let range = Number(currYear) - Number(this.state.filterValue);
        
        const logsFiltered = logFrom.filter(carsFrom => 
            carsFrom.model < range
            );

        this.setState({
            filtered: logsFiltered
        });

    }
    
    render() {
        //assignment of all state props to variables to be used in the elements that will be rendered
        const {logs, logItem, show, filterValue, filtered, modelValue, 
                makeValue, colorValue, regValue, ownerValue, addrValue,
                updatedAddress, updatedColor, updatedMake, updatedModel,
                updatedOwner, updatedReg
            } = this.state;

        return (
            <div className="table-container">
                <h1 className="table-heading">Car Lot</h1>
                <br></br>
                <InputGroup className="mb-3" id="input-group">
                    <InputGroup.Text>Vehicle Details</InputGroup.Text>
                    <FormControl aria-label="model" name="car-model" value={modelValue} type="number" placeholder="year model" onChange={this.handleModelChange}/>
                    <FormControl aria-label="make" name="car-make" value={makeValue} placeholder="vehicle make e.g) Audi" onChange={this.handleMakeChange}/>
                    <FormControl aria-label="color" name="car-color" value={colorValue} placeholder="vehicle color" onChange={this.handleColorChange}/>
                    <FormControl aria-label="registration" name="car-registration" value={regValue} placeholder="registration" onChange={this.handleRegChange}/>
                    <FormControl aria-label="owner" name="car-owner" value={ownerValue} placeholder="name of current owner" onChange={this.handleOwnerChange}/>
                    <FormControl aria-label="address" name="car-address" value={addrValue} placeholder="owner address" onChange={this.handleAddressChange}/>
                    <Button variant="secondary" type="submit" onClick={this.handleSubmit}>Add</Button>
                </InputGroup>
                <br></br>
                <hr></hr>
                <br></br>
                <p className="filter-heading">Enter age in years to view from. e.g) '5' will filter cars 5 years and older</p>
                <InputGroup className="mb-3" id="input-group">
                    <FormControl 
                        aria-label="filter" 
                        name="car-filter" value={filterValue} 
                        type="number"  
                        onChange={this.handleFilterChange} />
                    <Button variant="primary" type="submit" onClick={this.handleFilterSubmit}>Filter</Button>
                </InputGroup>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Model</th>
                        <th>Make</th>
                        <th>Color</th>
                        <th>Registration</th>
                        <th>Owner</th>
                        <th>Address</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    {filtered.length === 0 ? logs.map((item, idx) => (
                        <tr key={idx}>
                        <td>{idx}</td>
                        <td>{item.model}</td>
                        <td>{item.make}</td>
                        <td>{item.color}</td>
                        <td>{item.registration}</td>
                        <td>{item.owner}</td>
                        <td>{item.address}</td>
                        <td>
                            <Button 
                                variant="info" 
                                className="btn-update" 
                                value={item.registration}
                                onClick={this.handleUpdate}>
                                    Update
                            </Button>
                        </td>
                        <td>
                            <Button 
                                variant="danger" 
                                className="btn-delete" 
                                value={item.registration}
                                onClick={this.handleDelete}>
                                    Delete
                                </Button>
                        </td>
                        </tr>
                    
                    )) : filtered.map((item, idx) => (
                        <tr key={idx}>
                        <td>{idx}</td>
                        <td>{item.model}</td>
                        <td>{item.make}</td>
                        <td>{item.color}</td>
                        <td>{item.registration}</td>
                        <td>{item.owner}</td>
                        <td>{item.address}</td>
                        <td>
                            <Button 
                                variant="info" 
                                className="btn-update" 
                                value={item.registration}
                                onClick={this.handleUpdate}>
                                    Update
                            </Button>
                        </td>
                        <td>
                            <Button 
                                variant="danger" 
                                className="btn-delete" 
                                value={item.registration}
                                onClick={this.handleDelete}>
                                    Delete
                                </Button>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal show={show} onHide={this.handleModalClose} onShow={this.handleModalShow}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update Vehicle Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Model</InputGroup.Text>
                                <FormControl
                                aria-label="currModel"
                                aria-describedby="inputGroup-sizing-default"
                                name="currModel"
                                value={updatedModel}
                                placeholder={logItem.model}
                                onChange={this.handleModelUpdate}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Make</InputGroup.Text>
                                <FormControl
                                aria-label="currMake"
                                aria-describedby="inputGroup-sizing-default"
                                name="currMake"
                                value={updatedMake}
                                placeholder={logItem.make}
                                onChange={this.handleMakeUpdate}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Color</InputGroup.Text>
                                <FormControl
                                aria-label="currColor"
                                aria-describedby="inputGroup-sizing-default"
                                name="currColor"
                                value={updatedColor}
                                placeholder={logItem.color}
                                onChange={this.handleColorUpdate}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Registration</InputGroup.Text>
                                <FormControl
                                aria-label="currRegistration"
                                aria-describedby="inputGroup-sizing-default"
                                name="currRegistration"
                                value={updatedReg}
                                placeholder={logItem.registration}
                                onChange={this.handleRegUpdate}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Owner</InputGroup.Text>
                                <FormControl
                                aria-label="currOwner"
                                aria-describedby="inputGroup-sizing-default"
                                name="currOwner"
                                value={updatedOwner}
                                placeholder={logItem.owner}
                                onChange={this.handleOwnerUpdate}
                                />
                            </InputGroup>
                            <br />
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
                                <FormControl
                                aria-label="currAddress"
                                aria-describedby="inputGroup-sizing-default"
                                name="currAddress"
                                value={updatedAddress}
                                placeholder={logItem.address}
                                onChange={this.handleAddressUpdate}
                                />
                            </InputGroup>
                            <br />

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleUpdateSubmit}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
        )
    }
}

export default CarList;
