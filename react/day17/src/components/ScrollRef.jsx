import React, { useRef } from 'react'

const ScrollRef = () => {
    const homeRef=useRef(null);
    const aboutRef=useRef(null);
    const contactRef=useRef(null);

    const handleScroll=(ref)=>{
        ref.current.scrollIntoView({behavior:"smooth"});
    }
  return (
    <div>
        <div className='flex gap-3 bg-gray-200 p-3'>
        <button onClick={() => handleScroll(homeRef)}>Home</button>
        <button onClick={() => handleScroll(aboutRef)}>About</button>
        <button onClick={() => handleScroll(contactRef)}>Contact</button>
        </div>
        <hr/>
        <section ref={homeRef}>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit magni iusto ea sint. Impedit, perspiciatis illum? Et earum animi iste eos incidunt, reprehenderit aliquam cumque! Pariatur, quidem. Nesciunt voluptatem enim, quis ratione tempore numquam quam architecto, earum expedita placeat perferendis accusantium obcaecati odio, laboriosam quia inventore non iste saepe similique qui praesentium corporis. Voluptates sed quasi impedit consequatur error aut cupiditate cumque quisquam consequuntur nostrum. Voluptates itaque fugit, dignissimos ex atque soluta nesciunt, esse quas aut repudiandae ipsa velit, rem temporibus tenetur architecto. Nulla pariatur expedita magnam velit cupiditate et quidem, consequatur at, corporis voluptates provident commodi ab laborum quia. Nesciunt, doloribus error impedit dolorem culpa numquam. Aut commodi repudiandae eius dolorum magni esse doloremque, iure ea quibusdam fugiat vitae voluptatem at unde vel iusto rerum consequatur. Unde cum distinctio praesentium suscipit quod tempore maxime veritatis tempora porro obcaecati eaque, modi dignissimos, non fugit natus nemo exercitationem incidunt maiores. Facilis illo nobis nihil labore quos quasi impedit porro possimus maxime repellat ea eius recusandae laboriosam cupiditate, consequuntur non voluptatum rerum quibusdam? Asperiores sequi modi tenetur, deleniti voluptatum consequatur nam sapiente quis suscipit laboriosam ipsa eum repellat iste aut beatae tempora fugit! Sed, blanditiis veniam voluptate ratione veritatis facilis asperiores.</p>
        </section>
        <section ref={aboutRef}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor molestias, quisquam libero tempora soluta totam aperiam, inventore quaerat numquam magni. Mollitia eligendi animi nesciunt incidunt dignissimos sit praesentium necessitatibus reiciendis enim nemo et quo maiores distinctio doloremque modi illum, soluta aliquam sequi! Provident, veniam cupiditate ab aliquid corporis necessitatibus quasi esse recusandae, similique laboriosam assumenda non? Tenetur id inventore est, magnam voluptate alias dolor temporibus animi, vel expedita officiis quo distinctio ab eum veritatis molestias ipsum et, aliquid eligendi unde fugiat delectus? Rerum animi, debitis iure minus necessitatibus ratione sunt perspiciatis facere quaerat iste esse magni cupiditate totam quos eaque expedita ut ipsa aperiam officia laudantium laborum provident excepturi libero. Reprehenderit quas ex officiis, quos, fugiat saepe illum ipsum blanditiis odio recusandae quae officia! Exercitationem repellendus ducimus aperiam, quaerat soluta officia aut quis veniam assumenda nostrum sapiente expedita, officiis corporis perspiciatis, quod laboriosam doloremque eius ullam. Et aliquam nam distinctio quaerat laboriosam, suscipit corporis repudiandae tempora. Voluptatem vel accusantium dolores molestias unde recusandae dolorum asperiores, expedita eos odit exercitationem maxime ducimus nam qui quo quia vero aspernatur inventore at, nostrum voluptates voluptas. Temporibus debitis dolorum nostrum esse ex itaque explicabo adipisci labore recusandae omnis. Optio provident officia rerum aspernatur.</p>
        </section>
        <section ref={contactRef}>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit magni iusto ea sint. Impedit, perspiciatis illum? Et earum animi iste eos incidunt, reprehenderit aliquam cumque! Pariatur, quidem. Nesciunt voluptatem enim, quis ratione tempore numquam quam architecto, earum expedita placeat perferendis accusantium obcaecati odio, laboriosam quia inventore non iste saepe similique qui praesentium corporis. Voluptates sed quasi impedit consequatur error aut cupiditate cumque quisquam consequuntur nostrum. Voluptates itaque fugit, dignissimos ex atque soluta nesciunt, esse quas aut repudiandae ipsa velit, rem temporibus tenetur architecto. Nulla pariatur expedita magnam velit cupiditate et quidem, consequatur at, corporis voluptates provident commodi ab laborum quia. Nesciunt, doloribus error impedit dolorem culpa numquam. Aut commodi repudiandae eius dolorum magni esse doloremque, iure ea quibusdam fugiat vitae voluptatem at unde vel iusto rerum consequatur. Unde cum distinctio praesentium suscipit quod tempore maxime veritatis tempora porro obcaecati eaque, modi dignissimos, non fugit natus nemo exercitationem incidunt maiores. Facilis illo nobis nihil labore quos quasi impedit porro possimus maxime repellat ea eius recusandae laboriosam cupiditate, consequuntur non voluptatum rerum quibusdam? Asperiores sequi modi tenetur, deleniti voluptatum consequatur nam sapiente quis suscipit laboriosam ipsa eum repellat iste aut beatae tempora fugit! Sed, blanditiis veniam voluptate ratione veritatis facilis asperiores.</p>
        </section>
    </div>
  )
}



export default ScrollRef