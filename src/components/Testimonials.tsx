
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jade Adedeji",
      role: "Co Founder",
      company: "STEM METS RESOURCES ",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQEj1rzLHBbHSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705586337550?e=1754524800&v=beta&t=u87AiSVb9A05lNX23KKoGqfHuuzW46sx5FqsB4XugHg",
      quote: "Exceptional problem-solver who consistently delivers beyond expectations. Their AI integration work revolutionized our recruitment process.",
      rating: 5,
      source: "LinkedIn Recommendation"
    },
    {
      name: "Arefin Ahammed",
      role: "Software Engineer",
      company: "Cambridge Consultants",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQH4xny_b-tYHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665610202520?e=1754524800&v=beta&t=DFSOmqG3daeCzR9q96PVNRqs4fxrvCFDyTWiYYyWmOA",
      quote: "Nkemka has always impressed by his passion for learning and constant drive to improve. He’s focused, hardworking, and genuinely committed to doing well, both in university and towards his future. I am sure he will excel in everything if he keeps up with his work.",
      rating: 5,
      source: "Direct Collaboration"
    },
    {
      name: "Oremeyi Akah",
      role: "CCO",
      company: "Interswitch",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFU4-bCSsZNSA/profile-displayphoto-shrink_400_400/B4EZXxWe1SHcAg-/0/1743510958544?e=1754524800&v=beta&t=u-lwe8sG1eWhucGDC6qTFEUXpdNQsJT7Mj1iAyAlTRk",
      quote: "Rare combination of technical excellence and business acumen. They don't just code – they understand the 'why' behind every feature.",
      rating: 5,
      source: "Client Testimonial"
    },
    {
      name: "Arden Elegbe",
      role: "Founder",
      company: "Zenstrin",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQF1IXDjurywlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677834822465?e=1754524800&v=beta&t=U_fgJO088KTzehRqwqS1Cne64CuWAfgmVGPzdgRozn4",
      quote: "One of the most dedicated students I've mentored. Their ability to absorb feedback and apply clean architecture principles was impressive.",
      rating: 5,
      source: "Team Feedback"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from real collaborators, teammates, and clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-colors"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-purple-400 font-medium">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                <div className="flex-shrink-0">
                  <Quote className="text-purple-400/50" size={24} />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{testimonial.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 inline-block">
            <p className="text-gray-300 text-lg mb-2">
              💡 <strong>Fun Fact:</strong> These are real testimonials from LinkedIn and project collaborations
            </p>
            <p className="text-purple-400">
              Great code speaks for itself, but great relationships amplify everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
