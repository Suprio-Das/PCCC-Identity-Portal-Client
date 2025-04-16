import { MdConstruction } from "react-icons/md";

const AddMember = () => {
    return (
        <div className='min-h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
            {/* Add Member Form */}
            <div className="add-member px-11 py-8 rounded-md">
                <h1 className="lg:text-3xl font-semibold text-white mb-8 text-center">Add New Club Member</h1>
                <form>
                    <div className="grid lg:grid-cols-2 gap-5">
                        {/* Name */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Name</legend>
                            <input type="text" className="input w-sm text-black" name="name" placeholder="Type Club Member here" />
                        </fieldset>
                        {/* Batch */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Batch(e.g. 28)</legend>
                            <input type="number" className="input w-sm text-black" name="name" placeholder="Type Club Member Batch here" />
                        </fieldset>
                        {/* Section */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Section(e.g. A)</legend>
                            <input type="text" className="input w-sm text-black" name="name" placeholder="Type Club Member Section here" />
                        </fieldset>
                        {/* ID */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member ID(e.g. 02807546)</legend>
                            <input type="text" className="input w-sm text-black" name="name" placeholder="Type Club Member Section here" />
                        </fieldset>
                        {/* Contact */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Phone(e.g. 01xxxxxxxxx)</legend>
                            <input type="text" className="input w-sm text-black" name="name" placeholder="Type Club Member Section here" />
                        </fieldset>
                        {/* Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Email</legend>
                            <input type="text" className="input w-sm text-black" name="name" placeholder="Type Club Member Section here" />
                        </fieldset>
                    </div>
                    <button className="btn add-member-btn w-full mt-5">Add Member</button>
                </form>
            </div>
        </div>
    );
};

export default AddMember;