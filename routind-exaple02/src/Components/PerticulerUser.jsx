
import { withRouter } from 'react-router-dom'

function PerticulerUser(props) {
    console.log(props.match)
    return (
        <div className='mt-10 text-center'>
            <h1 className='text-2xl font-bold'>Details of User</h1>
            <div className='border w-96 mx-auto'>
                <div>
                    Id : <input type="text" value={props.match.params.id} />
                </div>
                <div>
                    Name : <input type="text" value={props.match.params.name} />
                </div>
                <div>
                    Email : <input type="text" value={props.match.params.name} />
                </div>
                <div>
                    Addres : <input type="text" value={props.match.params.name} />
                </div>
            </div>
        </div>
    )
}

export default withRouter(PerticulerUser)
