import { useLocation } from "react-router-dom" 

export default function Contact() {
  // Parte da url que pode ser vista depois do '?' exemplo name=shaun, usadas para fazer pesquisas no site
  const queryString = useLocation().search
  console.log(queryString)
  

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    
    </div>
  )
}
