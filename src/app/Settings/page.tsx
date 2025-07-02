const page = () => {
  return (
    <div className='max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900'>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* First Name */}
        <div>
          <label className='label'>
            <span className='label-text'>First Name</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Amr'
            readOnly
          />
        </div>
        {/* Last Name */}
        <div>
          <label className='label'>
            <span className='label-text'>Last Name</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Ahmed'
            readOnly
          />
        </div>
        {/* Email */}
        <div>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='amrahmedwork@hotmail.com'
            readOnly
          />
        </div>
        {/* Organization */}
        <div>
          <label className='label'>
            <span className='label-text'>Organization</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Freelancer'
            readOnly
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className='label'>
            <span className='label-text'>Phone Number</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='+20 1156039815'
            readOnly
          />
        </div>
        {/* Address */}
        <div>
          <label className='label'>
            <span className='label-text'>Address</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='21 high dam street Nasr City, Ninth Area'
            readOnly
          />
        </div>
        {/* State */}
        <div>
          <label className='label'>
            <span className='label-text'>State</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Nasr City'
            readOnly
          />
        </div>
        {/* Country */}
        <div>
          <label className='label'>
            <span className='label-text'>Country</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Egypt'
            readOnly
          />
        </div>
        {/* Language */}
        <div>
          <label className='label'>
            <span className='label-text'>Language</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='Arabic , English'
            readOnly
          />
        </div>
        {/* Currency */}
        <div>
          <label className='label'>
            <span className='label-text'>Currency</span>
          </label>
          <input
            type='text'
            className='input input-bordered w-full bg-white text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700'
            value='EGP'
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default page;
