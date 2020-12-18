import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

export default function PizzaMaker(props) {
    let history = useHistory()
    const [form, setForm] = useState({
        size: '',
        sauce: false,
        topping: false,
        special: '',
    })

    const handleCheckbox = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.checked
        })
    }
    const handleForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.setOrder(form)
            history.pushState('/confirmation')
        }}>
            <div className='submit'>
                <h2>Build Your Own Pizza</h2>
                
                <div>
                <h3>Choice of Size</h3>
                <p>Required</p>
                <label>
                    <select required onChange={handleForm} name='size'>
                        <option value=''>Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>
                </div>

                <div>
                <h3>Choice of Sauce</h3>
                <p>Required</p>
                <label>
                    <input
                    type='radio'
                    name='sauce'
                    value='marinara'
                    onChange={handleForm}
                    checked={form.sauce === 'marinara'}
                    />
                    Marinara
                </label>
                <label>
                    <input
                    type='radio'
                    name='sauce'
                    value='alfredo'
                    onChange={handleForm}
                    checked={form.sauce === 'alfredo'}
                    />
                    Alfredo
                </label>
                <label>
                    <input
                    type='radio'
                    name='sauce'
                    value='bbq sauce'
                    onChange={handleForm}
                    checked={form.sauce === 'bbq sauce'}
                    />
                    BBQ Sauce
                </label>
                </div>

                <div>
                <h3>Add Toppings</h3>
                <p>Choose up to 5</p>
                <label>
                    <input 
                    type='checkbox'
                    name='Pepperoni'
                    checked={form.pepperoni}
                    onChange={handleForm}
                    />
                    Pepperoni
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Sausage'
                    checked={form.sausage}
                    onChange={handleForm}
                    />
                    Sausage
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Bacon'
                    checked={form.bacon}
                    onChange={handleForm}
                    />
                    Bacon
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Spinach'
                    checked={form.spinach}
                    onChange={handleForm}
                    />
                    Spinach
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Chicken'
                    checked={form.chicken}
                    onChange={handleForm}
                    />
                    Chicken
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Onions'
                    checked={form.onions}
                    onChange={handleForm}
                    />
                    Onions
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Pepper'
                    checked={form.pepper}
                    onChange={handleForm}
                    />
                    Green Pepper
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Tomatoes'
                    checked={form.tomatoes}
                    onChange={handleForm}
                    />
                    Diced Tomatoes
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Olives'
                    checked={form.olives}
                    onChange={handleForm}
                    />
                    Black Olives
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Pineapple'
                    checked={form.pineapple}
                    onChange={handleForm}
                    />
                    Pineapple
                </label>
                </div>

                <div>
                <h3>Special Instructions</h3>
                <input
                    value={form.special}
                    onChange={handleForm}
                    name='special'
                    type='text'
                    placeholder='Anything else?'
                />
                </div>
                <div className='submit'>
                <button>Add to Order</button>
                </div>
            </div>
        </form>
    
    )
}