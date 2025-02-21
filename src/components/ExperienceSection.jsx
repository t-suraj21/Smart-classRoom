import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left max-w-3xl"
        >
          Get professional experience that matters with Extern
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
                    <p>Test drive career paths with real projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Build your resume with skills you've applied</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Connect with professionals from startups to Fortune brands</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Develop soft skills through professional collaboration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Learn how to use Gen AI tools through real projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1.5 mr-2">•</div>
                    <p>Gain real project experience to discuss at job interviews</p>
                  </li>
                </ul>
              </div>
            </motion.div>

      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 p-6">
        {/* Left Blue Box */}
        <motion.div
          className="bg-blue-100 rounded-2xl p-6 w-full md:w-[55%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-blue-700">
            Flexibly <span className="text-blue-500">explore careers</span> through real experience
          </h3>
          <div className="mt-4 space-y-4 overflow-hidden">
            {/* Motion div for looping animation */}
            <motion.div
              className="space-y-4"
              animate={{ y: [0, -180, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Consulting</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Market Analysis & Strategy Consulting</p>
                  <p className="text-xs text-gray-500">Men's casual apparel</p>
                </div>
                <img src="/assets/microsoft.png" alt="Microsoft Logo" className="h-8 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Venture Capital</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">VC Deal Sourcing & Startup Analysis</p>
                  <p className="text-xs text-gray-500">VC arm of HP Inc.</p>
                </div>
                <img src="/assets/hp-ventures-logo.png" alt="HP Ventures Logo" className="h-8 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Data</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Consumer Behavior & Market Analysis</p>
                  <p className="text-xs text-gray-500">Analytics and insights</p>
                </div>
                <img src="/assets/beats-logo.png" alt="Beats Logo" className="h-8 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Artificial Intelligence</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Machine Learning Applications</p>
                  <p className="text-xs text-gray-500">AI implementation strategy</p>
                </div>
                <img src="/assets/ai-logo.png" alt="AI Logo" className="h-8 ml-auto" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow flex items-center">
                <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded">Digital Marketing</span>
                <div className="ml-4">
                  <p className="text-sm font-semibold">Social Media & Content Strategy</p>
                  <p className="text-xs text-gray-500">Engagement optimization</p>
                </div>
                <img src="/assets/digital-logo.png" alt="Digital Marketing Logo" className="h-8 ml-auto" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side (Green and Pink Boxes) */}
        <div className="w-full md:w-[40%] space-y-4">
          {/* Green Box */}
          <motion.div
            className="bg-green-100 rounded-2xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-green-700">
              Build a <span className="text-green-500">resume</span> employers will notice
            </h3>
            <div className="bg-white rounded-lg p-4 shadow mt-4">
              <p className="text-sm font-semibold">Experience</p>
              <p className="text-xs text-gray-500">Extern | Blockchain Extern, Webacy</p>
              <p className="text-xs text-gray-500">Mar 2024 - Apr 2024 • 2 mos</p>
              <ul className="text-xs text-gray-500 list-disc list-inside mt-2">
                <li>Analyzed Ethereum blockchain</li>
                <li>Investigated suspicious transactions</li>
              </ul>
            </div>
          </motion.div>

          {/* Pink Box */}
          <motion.div
            className="bg-purple-200 rounded-2xl p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-purple-700">
              Learn how to use <span className="text-purple-500">Gen AI tools</span> through real projects
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              <img src="/chatgpt.png" alt="ChatGPT" className="h-6" />
              <img src="/perplexity.png" alt="Perplexity" className="h-6" />
              <img src="/claude.png" alt="Claude" className="h-6" />
              <img src="/gamma.png" alt="Gamma" className="h-6" />
              <img src="/manychat.png" alt="Manychat" className="h-6" />
              <img src="/gemini.png" alt="Gemini" className="h-6" />
              <img src="/zapier.png" alt="Zapier" className="h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;