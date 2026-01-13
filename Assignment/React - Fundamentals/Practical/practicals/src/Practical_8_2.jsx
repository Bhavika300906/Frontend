import React, { useState } from 'react'

function Practical_8_2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        if (!formData.email.includes("@")) {
            alert("Please enter a valid email address");
            return;
        }

        alert(
            "Form Submitted Successfully\n" +
            "Name: " + formData.name +
            "\nEmail: " + formData.email +
            "\nPassword: " + formData.password
        );
    };

    return (
        <div>
            <h3>Form with Email Validation</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Practical_8_2
