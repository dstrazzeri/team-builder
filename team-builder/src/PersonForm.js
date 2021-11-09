import React from "react";


export default function PersonForm(props) {

    const { values, update, submit } = props;

    const onChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return(
        <form className='personForm' onSubmit={onSubmit}>
            <div className='inputs'> 
              <label> Username: 
                  <input 
                  type='text'
                  name='username'
                  value={values.username}
                  onChange={onChange}
                  placeholder='Enter a username'
                  />
              </label>
              <label> Email: 
                  <input 
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={onChange}
                  placeholder='Enter an email'
                  />
              </label>
              <label> Role:
                  <select
                  name='Role'
                  value={values.Role}
                  onChange={onChange}
                  >
                      <option value=''> --Select a Role--</option>
                      <option value='Backend Engineer'>Backend Engineer</option>
                      <option value='Frontend Engineer'>Frontend Engineer</option>
                      <option value='Designer'>Designer</option>
                      </select>
              </label>
              <div className='submit'>
              <button disabled={!values.email || !values.username || !values.Role}>submit</button>
             </div>
            </div>
        </form>
    )
}