// server component

async function fetchUserDetails(currentUserId){
    try {
        const apiResponse = await fetch(`http://dummyjson.com/users/${currentUserId}`)
        const result = await apiResponse.json();
        return result
    } catch (error) {
        throw new Error(e);
    }
}

export default async function UserDetails({params}){
    // console.log(params);
    
    const userDetails = await fetchUserDetails(params.details)
    
    return(
        <div>
            <h1> This is user details page </h1>
            <p>{userDetails?.firstName} {userDetails?.lastName}</p>
            <p>{userDetails?.age}</p>
            <p>{userDetails?.email}</p>
            <p>{userDetails?.phone}</p>
            <p>{userDetails?.birthDate}</p>
        </div>
    )
}