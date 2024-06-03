import { redirect } from "next/navigation";

export default function Accounts(){

    // assume user profile is null
    const userProfileInfo = null;
    if(userProfileInfo === null){
        // redirect('/profile')
        // redirect('/cart?search=product1?&randomval=abcde')
        redirect('/products?search=product1')
    }    
    return <h1>Accounts page</h1>
}