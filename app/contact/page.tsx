import Image from "next/image";

export default function Contact() {
  return (
    <main>
        <h1>Contact page</h1>


    <Image 
        src="/images/dog.jpg"
        alt="Dog Image"
        width={600}
        height={400}        
    />
    </main>
  )
}