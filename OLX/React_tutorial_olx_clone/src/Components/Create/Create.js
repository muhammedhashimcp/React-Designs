import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { useContext } from 'react';
import { useHistory } from "react-router-dom";

const Create = () => {
	const { firebase } = useContext(FirebaseContext)
	const { user } = useContext(AuthContext)
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const date = new Date()
	const history = useHistory()
	const handleCreate = () => {

		firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
			ref.getDownloadURL().then((url) => {
				
				firebase.firestore().collection('products').add({
					name,
					category,
					price,
					url,
					userId: user.uid,
					createdAt: date.toDateString()
				}).then(()=>{
					history.push("/")
				})
			})
		})
	}
	return (
		<Fragment>
			<Header />
			<div>
				<div className="centerDiv">
					<label htmlFor="name">Name</label>
					<br />
					<input
						className="input"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						id="name"
						name="Name"
					/>
					<br />
					<label htmlFor="category">Category</label>
					<br />
					<input
						className="input"
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						id="category"
						name="category"
					/>
					<br />
					<label htmlFor="price">Price</label>
					<br />
					<input
						className="input"
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						id="price"
						name="Price" />
					<br />
					<br />
					<img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
					<br />
					<input
						type="file"
						onChange={(e) => {
							setImage(e.target.files[0])
						}}
					/>
					<br />
					<button onClick={handleCreate} className="uploadBtn">upload and Submit</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Create;
