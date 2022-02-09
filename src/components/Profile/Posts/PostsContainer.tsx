import React, { FC } from "react";
import { connect } from 'react-redux';
import { AppStateType } from "../../../redux/redux-store";
import { receiveTitle, receivePosts } from "../../../redux/selectors/profile-selectors"; 
import { PostType } from "../../../types/types";
import Post from "./Post/Post";

type PropsType = {
    title: string
    posts: Array<PostType>
}

const Posts: FC<PropsType> = (props): JSX.Element => {
    const { posts, title } = props;
    const postItems: Array<JSX.Element> = [...posts].reverse().map((post: PostType): JSX.Element => (
            <Post post={post} key={post.id}/>
        ));
    return (
        <section className="posts">
            <h3>{title}</h3>
            { postItems }
        </section>
    );
};

type MapStatePropsType = {
    title: string
    posts: Array<PostType>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    title: receiveTitle(state),
    posts: receivePosts(state)
})

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Posts);
