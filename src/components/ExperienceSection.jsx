import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className=" w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left max-w-3xl"
        >
          Transform Learning with AI-Powered Smart Classrooms
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>Track student progress with AI-driven analytics</p>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>Automate attendance with facial recognition</p>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>Interactive lessons powered by AI suggestions</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>Personalized learning paths for every student</p>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>AI-powered assignment grading & feedback</p>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 mt-1.5 mr-2">•</div>
                <p>Seamless integration with AI chatbots & tutors</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 p-6">
        {/* Left Blue Box */}
        <div className="bg-blue-100 rounded-2xl p-4 md:p-6 w-full md:w-[55%] flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-blue-700">
            Experience the future of education with AI-powered learning
          </h3>
          <div className="mt-4 space-y-4 overflow-hidden flex-grow">
            {/* Motion div for looping animation */}
            <motion.div
              className="space-y-4"
              animate={{ y: [0, -180, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">AI Attendance</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Real-time Student Tracking</p>
                  <p className="text-xs text-gray-500">Facial recognition-based attendance</p>
                </div>
                <img src="/assets/ai.jpg" alt="AI Logo" className="h-16 w-16 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Performance Insights</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">AI-Generated Student Reports</p>
                  <p className="text-xs text-gray-500">Identify learning gaps & strengths</p>
                </div>
                <img src="/assets/pr.jpg" alt="Data Analytics Logo" className="h-16 w-16 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Smart Assignments</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Auto-Graded AI-Enhanced Homework</p>
                  <p className="text-xs text-gray-500">Instant feedback & analytics</p>
                </div>
                <img src="/assets/as.jpg" alt="Assignment Logo" className="h-16 w-16 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Virtual Labs</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">AI-Powered Simulated Experiments</p>
                  <p className="text-xs text-gray-500">Hands-on learning in a digital environment</p>
                </div>
                <img src="/assets/lab.jpg" alt="Assignment Logo" className="h-16 w-16 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">AI Tutoring</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Personalized Learning Assistance</p>
                  <p className="text-xs text-gray-500">AI-driven mentorship for students</p>
                </div>
                <img src="/assets/tu.jpg" alt="Assignment Logo" className="h-16 w-16 ml-auto" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side (Green and Purple Boxes) */}
        <div className="w-full md:w-[40%] space-y-4">
          {/* Green Box */}
          <motion.div
            className="bg-green-100 rounded-2xl p-4 md:p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-green-700">
              Track student <span className="text-green-500">progress</span> with AI-driven analytics
            </h3>
            <div className="bg-white rounded-lg p-4 shadow mt-4">
              <p className="text-sm font-semibold">Analytics</p>
              <p className="text-xs text-gray-500">Smart Classroom AI</p>
              <p className="text-xs text-gray-500">Real-time dashboards & reports</p>
              <ul className="text-xs text-gray-500 list-disc list-inside mt-2">
                <li>Customizable progress tracking</li>
                <li>Automated performance evaluation</li>
              </ul>
            </div>
          </motion.div>

          {/* Purple Box */}
          <motion.div
            className="bg-purple-200 rounded-2xl p-4 md:p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-purple-700">
              Leverage <span className="text-purple-500">AI tools</span> for smarter teaching
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <img src="/assets/chatgpt.png" alt="ChatGPT" className="h-14" />
              <img src="/assets/perplexity.png" alt="Perplexity" className="h-14" />
              <img src="/assets/cluade.png" alt="Claude" className="h-14" />
              <img src="/assets/gamma.png" alt="Gamma" className="h-14" />
              <img src="/assets/manychat.png" alt="Manychat" className="h-14" />
              <img src="/assets/gemini.png" alt="Gemini" className="h-14" />
              <img src="/assets/zapier.png" alt="Zapier" className="h-14" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;