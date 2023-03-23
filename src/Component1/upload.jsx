const [photo, setImage] = useState(photo || null);



// This function will handle the user input for the image file
const handleImageChange = (event) => {
 setImage(URL.createObjectURL(event.target.files[0]));
};