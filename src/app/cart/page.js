'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){

    const pathName = usePathname(); // can't use in server component
    console.log(pathName); // output : /cart

    const searchParams = useSearchParams(); //  suppose url: cart?search=product1
    console.log(searchParams.get('search'), searchParams.get('randomval')); // output = product1
    // using above, we can extract query params from my url

    return(
        <div>
            <h1>This is our cart component</h1>
        </div>
    )
}