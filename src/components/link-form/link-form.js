import React, { useState } from 'react';
import linkFormStyles from './link-form.module.css';
import { shorterApi } from '../../utils/shorter-api';

function LinkForm({isLoggedIn, initialData, setInitialData}) {
  const [formValue, setFormValue] = useState('');

  function handleChange(evt) {
    setFormValue(evt.target.value);
  }

  function createLink(evt) {
    evt.preventDefault();
    if(isLoggedIn) {
      const token = localStorage.getItem('jwt');
      shorterApi.generateLink(formValue, token)
        .then((res) => {
          setInitialData([...initialData, res]);
          // console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  };

  return (
    <section className={linkFormStyles.formBlock}>
        <div className={linkFormStyles.wrapper}>
            <form className={linkFormStyles.form}
              onSubmit={ createLink }
            >
              <input className={linkFormStyles.input} type='text' placeholder='Вставьте ссылку' required name='link' 
                onChange={ handleChange }
              >
              </input>
              <button className={linkFormStyles.submitButton} type='submit'></button>
            </form>
        </div>
    </section>
  );
}

export default LinkForm;
