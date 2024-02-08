import HobbyCard from '../components/HobbyCard';

// Hobbies.tsx
// This page displays a list of hobbies along with their descriptions and images.

function Hobbies() {
  return (
    <div id="body-home">

      {/* Title */}
      <h1 className='h1-title-hobbies'>HOBBIES</h1>
      
      {/* Container for displaying hobby cards */}
      <div className="d-flex flex-wrap justify-content-around" id="hobby-card">
        
        {/* Hobby Card: Watching Movies */}
        <HobbyCard
          title="Watching Movies"
          description="The pleasure of watching movies lies in captivating narratives, mesmerizing visuals, and the escape they provide."
          imageSrc="./img/hobby-1.jpg"
        />
        
        {/* Hobby Card: Traveling */}
        <HobbyCard
          title="Traveling"
          description="Traveling offers a transformative experience, explore diverse cultures, broaden perspectives, and create lasting memories."
          imageSrc="./img/hobby-2.jpg"
        />
        
        {/* Hobby Card: Cooking */}
        <HobbyCard
          title="Cooking"
          description="Cooking is a creative and rewarding activity that involves crafting delicious meals and experimenting with flavors and techniques."
          imageSrc="./img/hobby-3.jpg"
        />
        
        {/* Hobby Card: Listening to music */}
        <HobbyCard
          title="Listening to music"
          description="Listening to music is a delightful experience, providing relaxation, and a deep emotional connection through diverse melodies and rhythms."
          imageSrc="./img/hobby-4.jpg"
        />
        
      </div>
    </div>
  );
}

export default Hobbies;
