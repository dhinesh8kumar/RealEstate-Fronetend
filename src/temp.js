const [values, setValues] = useState({

    email: '',

    password: '',

    confirmPassword: '',




    phoneNumber: '',




    loginType: ''

})

const navigate = useNavigate();

const [errors, setErrors] = useState({});

const handleInput = (e) => {

    setValues({ ...values, [e.target.name]: [e.target.value] })

}




function validation(values) {

    let error = {};

    if (!values.email) {

        error.email = 'Email is required for login'

    }

    if (!values.password) {

        error.password = "password is required for login"

    }

    if (values.confirmPassword === "" || String(values.confirmPassword) !== String(values.password)) {




        error.confirmPassword = "password does not matched"



    }





    if (values.phoneNumber === "") {



        error.phoneNumber = "Number is required"

    }

    if (values.loginType === '') {

        error.loginType = 'Choose one'

    }

    return error;

}

function handleSubmit(event) {




    event.preventDefault();



    let Error = validation(values)

    if (Object.keys(Error).length === 0) {

        setErrors({});

        axios.post('http://localhost:8800/signup', { ...values })



            .then(res => {

                

                setUserMsg(res.data)

                console.log(res)
            })

            .catch(err => {

                if (err) {



                }

                else {



                }



                console.log(err)
            });



        console.log(values);

    }

    else {

        setErrors(Error);

    }

}

const handleClose = () => setShow(false);

const handleShow = () => setShow(true);