import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Form extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {value: 'coconut'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event)
	{
		this.setState({value: event.target.value});
	}

	handleSubmit(event)
	{
		alert('Your favorite flavor is: ' + this.state.value);
		event.preventDefault();
	}

	render()
	{
		return (
			<div className="App">
				<div className={"container"}>
					<form>
						<div className="form-group">
							<label htmlFor="nameInput">Name</label>
							<input type="text" className="form-control" id="nameInput" aria-describedby="emailHelp"
										 placeholder="Your name"/>
							<small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone
								else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
										 placeholder="Enter email"/>
							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
								else.</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
						</div>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
							<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
						</div>

						<div className="form-group">
							<label htmlFor="exampleFormControlInput1">Email address</label>
							<input type="email" className="form-control" id="exampleFormControlInput1"
										 placeholder="name@example.com"/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect1">Example select</label>
							<select className="form-control" id="exampleFormControlSelect1">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect2">Example multiple select</label>
							<select multiple className="form-control" id="exampleFormControlSelect2">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea1">Example textarea</label>
							<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
						</div>


						<button type="submit" className="btn btn-primary">Submit</button>

					</form>
				</div>
			</div>
		);
	}
}

export default Form;
