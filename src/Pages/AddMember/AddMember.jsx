import { MdConstruction } from "react-icons/md";

const AddMember = () => {
    return (
        <div className='min-h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
            <h1 className="lg:text-3xl font-semibold text-blue-500 mb-8">Add New Club Member</h1>
            {/* Add Member Form */}
            <div>
                <form>
                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter Club Member Name</legend>
                        <input type="text" className="input w-sm" name="name" placeholder="Type Club Member here" />
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default AddMember;