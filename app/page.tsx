import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import Cta from "@/components/CTA"
import { recentSessions } from "@/constants"

const Home = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id="1"
          name="Sample Companion"
          topic="Sample Topic"
          subject="Sample Subject"
          duration={45}
          color="#ff4950"
          bookmarked
        />
        <CompanionCard
          id="2"
          name="Sample Companion"
          topic="Sample Topic"
          subject="Sample Subject"
          duration={45}
          color="#ffeec1"
          bookmarked
        />
        <CompanionCard
          id="3"
          name="Sample Companion"
          topic="Sample Topic"
          subject="Sample Subject"
          duration={45}
          color="#ffdf40"
          bookmarked
        />
      </section>

      <section className="home-section">
        <CompanionsList title="Recently completed sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full mb-3" />
        <Cta />
      </section>

    </main>
  )
}

export default Home