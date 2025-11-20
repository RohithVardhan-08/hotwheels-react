const HotWheels = () => {
  return (
    <>
    <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">HOT WHEELS</h1>
        <aside className="flex gap-6">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Cars</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
        </aside>
    </nav>
    
    <section className="h-[70vh] bg-[url(https://images.hdqwalls.com/wallpapers/hot-wheels-and-jet-21.jpg)] bg-cover bg-center flex justify-center items-center">
        <div className="text-white bg-[rgba(0,0,0,0.5)] flex flex-col gap-6 justify-center items-center px-16 py-10 rounded-2xl">
            <h1 className="text-4xl font-bold">Premium Toys Car</h1>
            <p>Collect the coolest miniature cars</p>
            <button className="bg-blue-600 rounded-4xl px-6 py-3 hover:bg-blue-800 cursor-pointer">Shop Now</button>
        </div>
    </section>

    <section className="bg-gray-50">
     <h1 className="text-center pt-10 pb-5 text-2xl font-bold">Featured Toy Cars</h1>
     <article className="flex justify-evenly items-center flex-wrap">
      <div className="p-4 rounded-2xl my-4 shadow bg-white">
        <img src="https://images.unsplash.com/photo-1648711727240-7ee250483923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&   ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Car1" className="h-[200px] w-[450px] object-cover rounded-2xl"/>
        <h1 className="text-xl font-semibold my-1 pt-2">Red Sports Car</h1>
        <p className="text-gray-800 my-1">High-speed mini racer</p>
        <p className="text-blue-600 font-bold">₹499</p>
      </div>
      <div className="p-4 rounded-2xl my-4 shadow bg-white">
        <img src="https://images.unsplash.com/photo-1648711085453-1ad7ef382e69?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2hlZWxzfGVufDB8fDB8fHww" alt="Car2" className="h-[200px] w-[450px] object-cover rounded-2xl "/>
        <h1 className="text-xl font-semibold my-1 pt-2">Yellow Drift Car</h1>
        <p className="text-gray-800 my-1">Limited edition drift model</p>
        <p className="text-blue-600 font-bold">₹599</p>
      </div>
      <div className="p-4 rounded-2xl my-4 shadow bg-white">
        <img src="https://i.ytimg.com/vi/8DHdVqRbVvU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNm1MKLuCM2rCdMQavC9cYMlOSxQ" alt="Car3" className="h-[200px] w-[450px] object-cover rounded-2xl "/>
        <h1 className="text-xl font-semibold my-1 pt-2">Blue Mini Super Car</h1>
        <p className="text-gray-800 my-1">Futuristic design & fast</p>
        <p className="text-blue-600 font-bold">₹699</p>
      </div>
     </article>

      <section className="pb-8">
         <h1 className="text-center pt-10 pb-7 text-2xl font-bold">Why Choose Us?</h1>
        <article className="flex justify-evenly items-center flex-wrap">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-4xl pb-3">🚗</p>
            <p className="font-semibold">Premium Collection</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-4xl pb-3">⚡</p>
            <p className="font-semibold">Premium Collection</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-4xl pb-3">💳</p>
            <p className="font-semibold">Premium Collection</p>
          </div>
        </article>
      </section>

      <footer className="bg-blue-950 py-7 flex justify-center items-center">
        <p className="text-white">© 2025 Toy Cars Store — All Rights Reserved</p>
      </footer>
    </section>
    </>
    
  )
}

export default HotWheels