import { useState, useEffect } from "react";

const ProgramsFilter = () => {

    // const [isStickyBox, setIsStickyBox] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 200) {
    //             setIsStickyBox(true);
    //         } else {
    //             setIsStickyBox(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            {/* <div className={`programsFilter ${isStickyBox ? 'stickyBox' : ''}`}> */}
            <div className="programsFilter">
                <h1>filter box</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus error atque rem sint tempore voluptatem, consequuntur quidem blanditiis iusto architecto consequatur tempora dolores provident asperiores amet sunt assumenda? Nulla quis totam placeat excepturi eveniet sit dolorum facere! Nisi commodi, quia omnis hic vitae consequatur culpa quis! Molestias, officia voluptate ipsam sunt vel itaque quisquam dignissimos recusandae nemo placeat architecto aspernatur quo fuga, nobis amet. Dolore esse reprehenderit natus voluptatibus rem libero temporibus incidunt cum porro ullam dolor voluptas nam quos quibusdam excepturi asperiores, inventore itaque, unde nemo doloribus maiores doloremque architecto qui. Perferendis illum excepturi reprehenderit numquam delectus commodi error!</p>
            </div>
        </>
    );
}

export default ProgramsFilter;