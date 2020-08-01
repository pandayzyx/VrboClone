import React from "react"
const queryString = require("query-string");

class PaymentSuccess extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            transactionId:"",
            firstname:"",
            lastname:"",
            email:"",
            mobileNo:"",
            startDate:"",
            endDate:"",
            Location:"",
            adultsCount:"",
            childreCount:""
        }
    }
  
    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        let params =  values
        for(let key in params){
            if(key ==="arrivalDate"){
                this.setState({
                    startDate:params[key]
                })
            }
            else if(key ==="destinationDate"){
                this.setState({
                    endDate:params[key]
                })
            }
            else if(key ==="mobileNo"){
                this.setState({
                    mobileNo:params[key]
                })
            }
            else if(key ==="firstName"){
                this.setState({
                    firstname:params[key]
                })
            }
            else if(key ==="lastName"){
                this.setState({
                    lastname:params[key]
                })
            }
            else if(key ==="email"){
                this.setState({
                    email:params[key]
                })
            }
            else if(key ==="location"){
                this.setState({
                    Location:params[key].split("%20").join("")
                })
            }
            else if(key ==="adultsCount"){
                this.setState({
                    adultsCount:Number(params[key])
              
                })
            }
            else if(key ==="childrenCount"){
                this.setState({
                    childreCount:Number(params[key])
                })
            }
            
        }

    }

    redirectToHomePage = ()=>{
        let history =  this.props.history
      setTimeout(function(){
           history.push("/")
     },5000)
    }

    render(){
        this.redirectToHomePage()
        let {firstname,lastname,email,Location,startDate,endDate,mobileNo,adultsCount,childreCount} = this.state
        var transactionId = 12345
		var date = `${startDate} - ${endDate}`
		var Title = 'Spacious 3 Bedrooms'
        // var Location = 'Virginia, USA'
        console.log(endDate)
		var numberOfNights = 3
		var Guests = adultsCount+ childreCount
		var TotalPricePaid = '$ 2033.33'
        return (
			<div>
				<div className="container d-flex mt-5">
					<div className='col-7 d-flex'>
						<div style={{padding: '10px', color: 'green', fontSize: '32px', border: '3px solid green'}} className='rounded-circle'><i style = {{width:"45px"}} class="fa fa-check" aria-hidden="true"></i></div>
						<div style={{marginTop: '10px', textAlign: 'justify', marginLeft: '15px'}}>
        <div><span style={{fontWeight: 'bolder'}}>{firstname}</span>, your order was submitted successfully!</div>
							<div>Booking details has been sent to: <span style={{fontWeight: 'bolder'}}>{email}</span></div>
						</div>
					</div>
					<div className='col-5 text-justify' style={{borderLeft: '1px solid black'}}>
						<div>Transaction Id : {transactionId}</div>
						<div>Date : {date}</div>
						<div>Payment Method : Bank Transfer</div>
					</div>
				</div>
				<div className="container d-flex my-5">
					<div className='col-7'>
						<div style={{fontWeight: 'bolder', fontSize: '32px', textAlign: 'justify'}}>Your Information</div>
						<div className='card mt-3'>
							<div className='d-flex p-2 text-justify'>
								<div className='col-4 p-2'>First Name</div>
								<div className='col-8 p-2'>{firstname}</div>
							</div>
							<hr/>
							<div className='d-flex p-2 text-justify'>
								<div className='col-4 p-2'>Last Name</div>
								<div className='col-8 p-2'>{lastname}</div>
							</div>
							<hr/>
							<div className='d-flex p-2 text-justify'>
								<div className='col-4 p-2'>Email</div>
								<div className='col-8 p-2'>{email}</div>
							</div>
							<hr/>
							<div className='d-flex p-2 text-justify'>
								<div className='col-4 p-2'>Phone</div>
								<div className='col-8 p-2'>{mobileNo}</div>
							</div>
						</div>
					</div>
					<div className='col-5'>
						<div style={{fontWeight: 'bolder', fontSize: '32px', textAlign: 'justify'}}>Your Item</div>
						<div className="card mt-3">
							<div className="d-flex">
								<div className='col-8 text-justify p-3'>
									<div>{Title}</div>
									<div ><span><i class="fa fa-map-marker " aria-hidden="true"></i></span>{Location}</div>
								</div>
								<div className='col-4 p-3'>
									<img src="https://remap.travelerwp.com/wp-content/uploads/2015/01/2019-03-25-21-02-41-721563-Jessica_Nash_PhotographyOne_Fine_Stay-scaled-110x110.jpg" alt="img"/>
								</div>
							</div>
							<hr/>
							<div className="d-flex p-2 text-justify">
								<div className='col-4'>Name</div>
								<div className='col-8'>{Title}</div>
							</div>
							<div className="d-flex p-2 text-justify">
								<div className='col-4'>Date</div>
								<div className='col-8'>{date}</div>
							</div>
							<hr/>
							<div className='card p-4' style={{backgroundColor: 'rgb(222,222,222)', width: '300px', marginLeft: '65px'}}>
								<div className="d-flex p-2 text-justify">
									<div className='col-9'>Number of Nights</div>
									<div className='col-3'>{numberOfNights}</div>
								</div>
								<div className="d-flex p-2 text-justify">
									<div className='col-9'>Number of Guests</div>
									<div className='col-3'>{Guests}</div>
								</div>
							</div>
							<hr/>
							<div className="d-flex p-2 text-justify my-3">
								<div className='col-9' style={{fontWeight: 'bolder'}}>Paid Amount</div>
								<div className='col-3'>{TotalPricePaid}</div>
							</div>
						</div>
					</div>
				</div>				
			</div>
		)
    }
}

export default PaymentSuccess