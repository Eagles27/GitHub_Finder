import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import { BsCheckLg } from "react-icons/bs";
import { AiFillStop } from "react-icons/ai";

const User = ({ repos, getUserRepos }) => {
  const githubContext = useContext(GithubContext);

  const { login } = useParams(); ///To pass props from URL since RRD V6

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  const { getUser, user, loading } = githubContext;

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Research
      </Link>
      Hireable: {hireable ? <BsCheckLg /> : <AiFillStop />}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;