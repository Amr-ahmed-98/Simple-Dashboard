import AboutProfile from '../_components/AboutProfile/AboutProfile';
import ImageProfile from '../_components/ImageProfile/ImageProfile';
import TeamsProfile from '../_components/TeamsProfile/TeamsProfile';
import ProjectProfile from '../_components/ProjectProfile/ProjectProfile';
const page = () => {
  return (
    <div>
      <ImageProfile />
      <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-start mt-6'>
        <AboutProfile />
        <TeamsProfile />
      </div>
      <ProjectProfile />
    </div>
  );
};

export default page;
