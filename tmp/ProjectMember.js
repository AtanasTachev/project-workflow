import './card.css'


const ProjectMember = (user) => {

//    {user.firstName} {user.lastName} 

    const userString = `${user.firstName}`

    return (
        <>
        {
            user ?
            (<li className="list"> {userString} </li>) :
            ''
        }
        </>
    )
}

export default ProjectMember