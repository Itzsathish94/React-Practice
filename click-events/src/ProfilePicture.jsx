function ProfilePicture(){

    const imageURL = 'https://via.placeholder.com/150'

    const handleClick = (e) => e.target.style.display = 'none';


    return(
        <img onClick={handleClick} src={imageURL} alt="Profile Picture" />
    );
}

export default ProfilePicture