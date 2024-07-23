// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../assets/images/hero-image.jpg';

// const HomePage = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Hero Section */}

//       <header className="text-center mb-12">
//         <div className="flex flex-col lg:flex-row items-center lg:justify-between">
//           {/* Image Section */}
//           <img
//             src={heroImage}
//             alt="Hero"
//             className="w-[300px] h-[500px] lg:w-2/5 max-w-2xl rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8"
//           />

//           {/* Buttons Section */}
//           <div className="flex flex-col items-center space-y-4 lg:space-y-4">
//             <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to TalentHive</h1>
//             <p className="text-lg mb-8 text-gray-700">Find the best internship opportunities and manage your applications seamlessly.</p>

//               <Link to="/login">
//                 <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">Login</button>
//               </Link>
//               <Link to="/register">
//                 <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">Register</button>
//               </Link>
//               <Link to="/opportunities">
//                 <button className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition">View Opportunities</button>
//               </Link>

//           </div>
//         </div>
//       </header>


//       {/* Features Section */}
//       <section className="mt-12 text-center">
//         <h2 className="text-3xl font-semibold mb-6">Why Choose TalentHive?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Easy Application</h3>
//             <p className="text-gray-600">Apply to internships with just a few clicks and track your applications effortlessly.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Curated Opportunities</h3>
//             <p className="text-gray-600">Access a curated list of the best internships tailored to your career goals.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
//             <p className="text-gray-600">Keep track of your application status and manage your career journey in one place.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section (Optional) */}
//       <section className="mt-12 text-center">
//         <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
//         <div className="space-y-6">
//           <blockquote className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600">“TalentHive has transformed my internship search experience. It’s user-friendly and efficient!”</p>
//             <footer className="mt-4 text-gray-800">- Alex Johnson</footer>
//           </blockquote>
//           <blockquote className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600">“I found my dream internship through TalentHive. The platform is incredible!”</p>
//             <footer className="mt-4 text-gray-800">- Jamie Lee</footer>
//           </blockquote>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="mt-12 text-center text-gray-600">
//         <p>Contact us at <a href="mailto:ronakkushwaha123@gmail.com" className="text-blue-500 hover:underline">chitranshukushwaha01@gmail.com</a></p>
//         {/* Optionally add social media links here */}
//       </footer>
//     </div>
//   );
// };

// export default HomePage;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../assets/images/hero-image.jpg';
// import internshipIcon from '../assets/icons/internship.png';
// import applicationIcon from '../assets/icons/resume.png';
// import progressIcon from '../assets/icons/progress.png';
// import user1 from '../assets/images/man.png';
// import user2 from '../assets/images/woman.png';

// const HomePage = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <header className="text-center mb-12">
//         <div className="flex flex-col lg:flex-row items-center lg:justify-between">
//           {/* Image Section */}
//           <img
//             src={heroImage}
//             alt="Hero"
//             className="w-[300px] h-[500px] lg:w-2/5 max-w-2xl rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8"
//           />

//           {/* Buttons Section */}
//           <div className="flex flex-col items-center space-y-4 lg:space-y-4">
//             <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to TalentHive</h1>
//             <p className="text-lg mb-8 text-gray-700">Find the best internship opportunities and manage your applications seamlessly.</p>

//             <Link to="/login">
//               <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">Login</button>
//             </Link>
//             <Link to="/register">
//               <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition">Register</button>
//             </Link>
//             <Link to="/opportunities">
//               <button className="bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition">View Opportunities</button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Features Section */}
//       <section className="mt-12 text-center">
//         <h2 className="text-3xl font-semibold mb-6">Why Choose TalentHive?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <img src={applicationIcon} alt="Easy Application" className="w-12 h-12 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Easy Application</h3>
//             <p className="text-gray-600">Apply to internships with just a few clicks and track your applications effortlessly.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <img src={internshipIcon} alt="Curated Opportunities" className="w-12 h-12 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Curated Opportunities</h3>
//             <p className="text-gray-600">Access a curated list of the best internships tailored to your career goals.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <img src={progressIcon} alt="Track Progress" className="w-12 h-12 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
//             <p className="text-gray-600">Keep track of your application status and manage your career journey in one place.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="mt-12 text-center">
//         <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
//         <div className="space-y-6">
//           <blockquote className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600">“TalentHive has transformed my internship search experience. It’s user-friendly and efficient!”</p>
//             <footer className="mt-4 text-gray-800 flex items-center justify-center">
//               <img src={user1} alt="Alex Johnson" className="w-8 h-8 rounded-full mr-2" />
//               - Alex Johnson
//             </footer>
//           </blockquote>
//           <blockquote className="bg-white p-6 rounded-lg shadow-md">
//             <p className="text-gray-600">“I found my dream internship through TalentHive. The platform is incredible!”</p>
//             <footer className="mt-4 text-gray-800 flex items-center justify-center">
//               <img src={user2} alt="Jamie Lee" className="w-8 h-8 rounded-full mr-2" />
//               - Jamie Lee
//             </footer>
//           </blockquote>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="mt-12 text-center text-gray-600">
//         <p>Contact us at <a href="mailto:ronakkushwaha123@gmail.com" className="text-blue-500 hover:underline">chitranshukushwaha01@gmail.com</a></p>
//         {/* Optionally add social media links here */}
//       </footer>
//     </div>
//   );
// };

// export default HomePage;





import React from 'react';
import { Link } from 'react-router-dom';
import newHeroImage from '../assets/images/hero-image-2.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Image Section */}
          <img
  src={newHeroImage}
  alt="Hero"
  className="w-[300px] h-[300px] lg:w-1/2 max-w-2xl rounded-full shadow-lg mb-8 lg:mb-0 lg:mr-8"
/>


          {/* Buttons Section */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-6xl font-extrabold mb-6 text-gray-900">Welcome to TalentHive</h1>
            <p className="text-xl mb-8 text-gray-700">
              Discover top internships and streamline your application process effortlessly.
            </p>
            <div className="space-y-4">
              <Link to="/login">
                <button className="bg-blue-600 text-white mx-2 py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition">
                  Login
                </button>
                <> </>
              </Link>
              <Link to="/register">
                <button className="bg-green-600 text-white py-3 mx-3 px-8 rounded-lg shadow hover:bg-green-700 transition">
                  Register
                </button>
              </Link>
              <Link to="/opportunities">
                <button className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow hover:bg-purple-700 transition">
                  View Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Choose TalentHive?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Seamless Applications</h3>
            <p className="text-gray-700">
              Apply for internships effortlessly and track your progress in real-time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Top Opportunities</h3>
            <p className="text-gray-700">
              Access a curated list of top internships tailored to your career aspirations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
            <p className="text-gray-700">
              Keep track of your applications and manage your career journey in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">What Our Users Say</h2>
        <div className="space-y-8">
          <blockquote className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700">“TalentHive has transformed my internship search experience. It’s user-friendly and efficient!”</p>
            <footer className="mt-4 text-gray-800">- Alex Johnson</footer>
          </blockquote>
          <blockquote className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700">“I found my dream internship through TalentHive. The platform is incredible!”</p>
            <footer className="mt-4 text-gray-800">- Jamie Lee</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-600">
        <p>Contact us at <a href="mailto:ronakkushwaha123@gmail.com" className="text-blue-600 hover:underline">ronakkushwaha123@gmail.com</a></p>
        {/* Optionally add social media links here */}
      </footer>
    </div>
  );
};

export default HomePage;
