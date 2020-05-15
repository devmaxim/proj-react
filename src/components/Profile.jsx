import React from "react";

const Profile = () => {
    return <div className="main">
        <img  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
              alt="image" className="main__image"/>
        <div className="main-header">
            ava+description
        </div>
        <div className="main-posts">
            My posts
            <div className="main-posts__new">
                new post
            </div>
            <div className="post-1">
                post 1
            </div>
            <div className="post-2">
                post 2
            </div>
        </div>
    </div>
}

export default Profile;