import React from "react";
import { Link } from "react-router-dom";
import { GetLocation } from "../../pages/GetLocation";

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submit: '',
            popup: false,
            disabled: true
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(e.target.value);
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.state.value.length >= 3) {
            this.setState({
                disabled: false
            })
        }
       
        if (localStorage.getItem('city')) {
            localStorage.removeItem('city');
            localStorage.setItem('city', this.state.value);
        } else {
            localStorage.setItem('city', this.state.value);
        }
    }

    render() {
        return (
            <section className="popup__section">
                <div className="popup__container">
                    <div className="popup__form">
                        <form action="" onSubmit={this.onSubmit}>
                            <h2 className="form-content__title">Введіть назву міста, або дозвольте отримати вашу геолокацію браузеру, та обновіть сторінку.</h2>
                            <input
                                type="text"
                                placeholder="Введіть назву міста"
                                className="form-content__input"
                                required
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="form-content__btn">Підтвердити</button>
                            {this.state.disabled === true ?
                                <button className="form-content__btn link" disabled>
                                    <a href="" className="link">Знайти</a>
                                </button>
                                :
                                <button className="form-content__btn link">
                                    <a href="" className="link" >Знайти</a>
                                </button>
                            }
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default PopUp;