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
            history.push('/confirmation')
        }}>
            <div className='submit'>
                <h2>Build Your Own Pizza</h2>
                <input required onChange={handleForm} value={form.name}
                    type='text'
                    name='name'
                    placeholder='Name'
                    min={2}
                />
                
                <div>
                <h3>Choice of Size</h3>
                <p>Required</p>
                <label>
                    <select required onChange={handleForm} name='size'>
                        <option value=''>Select</option>
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='Heart'>Heart Shaped</option>
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
                <label>
                    <input
                    type='radio'
                    name='sauce'
                    value='stuff'
                    onChange={handleForm}
                    checked={form.sauce === 'stuff'}
                    />
                    The Stuff
                </label>
                <label>
                    <input
                    type='radio'
                    name='sauce'
                    value='buffalo sauce'
                    onChange={handleForm}
                    checked={form.sauce === 'buffalo sauce'}
                    />
                    Buffalo Sauce
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
                    onChange={handleCheckbox}
                    />
                    Pepperoni
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Sausage'
                    checked={form.sausage}
                    onChange={handleCheckbox}
                    />
                    Sausage
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Bacon'
                    checked={form.bacon}
                    onChange={handleCheckbox}
                    />
                    Bacon
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Spinach'
                    checked={form.spinach}
                    onChange={handleCheckbox}
                    />
                    Spinach
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Chicken'
                    checked={form.chicken}
                    onChange={handleCheckbox}
                    />
                    Chicken
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Onions'
                    checked={form.onions}
                    onChange={handleCheckbox}
                    />
                    Onions
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='dollars'
                    checked={form.dollars}
                    onChange={handleCheckbox}
                    />
                    Dollar Bills
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Pepper'
                    checked={form.pepper}
                    onChange={handleCheckbox}
                    />
                    Green Pepper
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Tomatoes'
                    checked={form.tomatoes}
                    onChange={handleCheckbox}
                    />
                    Diced Tomatoes
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Glitter'
                    checked={form.glitter}
                    onChange={handleCheckbox}
                    />
                    Glitter
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Olives'
                    checked={form.olives}
                    onChange={handleCheckbox}
                    />
                    Black Olives
                </label>
                <label>
                    <input 
                    type='checkbox'
                    name='Pineapple'
                    checked={form.pineapple}
                    onChange={handleCheckbox}
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
                <h3>Quantity</h3>
                <input onChange={handleForm}
                    type='number'
                    name='quantity'
                    min={1}
                    value={form.quantity}
                />
                <button className='submit'>Add to Order</button>
                </div>
            </div>
        </form>
    
    )
}