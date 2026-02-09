import { Book, Category, ThemeColors } from './types';

// Books database - organized by category with authors grouped together
// Search works on both title and author fields
export const BOOKS: Book[] = [
  // ============ SELF-HELP (20 books - Grouped by Author) ============
  // Ankur Warikoo books together
  { id: 'sh3', title: 'Do Epic Shit', coverImage: '/Books/Self-Help/Do Epic Shit.jpg', author: 'Ankur Warikoo', category: Category.SELF_HELP, keywords: ['Do', 'Epic', 'Shit', 'Do Epic Shit', 'Warikoo', 'Ankur', 'Ankur Warikoo', 'Motivation', 'Success', 'Indian Author', 'Entrepreneur'] },
  { id: 'sh7', title: 'Get Epic Shit Done', coverImage: '/Books/Self-Help/Get Epic Shit Done.jpg', author: 'Ankur Warikoo', category: Category.SELF_HELP, keywords: ['Get', 'Epic', 'Shit', 'Done', 'Get Epic Shit Done', 'Warikoo', 'Ankur', 'Ankur Warikoo', 'Productivity', 'Success', 'Indian Author'] },
  
  // Mark Manson books together
  { id: 'sh5', title: 'Everything is F*cked', coverImage: '/Books/Self-Help/Everything is Fucked.jpg', author: 'Mark Manson', category: Category.SELF_HELP, keywords: ['Everything', 'is', 'Fucked', 'Everything is Fucked', 'Hope', 'Manson', 'Mark', 'Mark Manson', 'Philosophy', 'Life'] },
  { id: 'sh19', title: 'The Subtle Art of Not Giving a F*ck', coverImage: '/Books/Self-Help/The Subtle Art of Not Giving a Fuck.jpg', author: 'Mark Manson', category: Category.SELF_HELP, keywords: ['The', 'Subtle', 'Art', 'of', 'Not', 'Giving', 'a', 'Fuck', 'Subtle Art', 'Not Giving a Fuck', 'The Subtle Art of Not Giving a Fuck', 'Manson', 'Mark', 'Mark Manson', 'Bestseller', 'Life Advice'] },
  
  // Darius Foroux books together (3 books)
  { id: 'sh21', title: 'Think Straight', coverImage: '/Books/Self-Help/Think Straight.jpg', author: 'Darius Foroux', category: Category.SELF_HELP, keywords: ['Think Straight', 'Thinking', 'Foroux', 'Clarity', 'Mental', 'Focus'] },
  { id: 'sh22', title: 'Do It Today', coverImage: '/Books/Self-Help/Do It Today.jpg', author: 'Darius Foroux', category: Category.SELF_HELP, keywords: ['Do It Today', 'Productivity', 'Foroux', 'Action', 'Procrastination'] },
  { id: 'sh6', title: 'Focus on What Matters', coverImage: '/Books/Self-Help/Focus on What matters.jpg', author: 'Darius Foroux', category: Category.SELF_HELP, keywords: ['Focus', 'What Matters', 'Foroux', 'Priorities', 'Productivity'] },
  
  // Individual authors
  { id: 'sh1', title: 'Attitude is Everything', coverImage: '/Books/Self-Help/Attitude is everything.jpg', author: 'Jeff Keller', category: Category.SELF_HELP, keywords: ['Attitude', 'Everything', 'Keller', 'Mindset', 'Positive', 'Success'] },
  { id: 'sh2', title: 'Attitude', coverImage: '/Books/Self-Help/Attitude.jpg', author: 'John C. Maxwell', category: Category.SELF_HELP, keywords: ['Attitude', 'Maxwell', 'Leadership', 'Mindset', 'Positive'] },
  { id: 'sh4', title: 'Ego is the Enemy', coverImage: '/Books/Self-Help/Ego is the Enemy.jpg', author: 'Ryan Holiday', category: Category.SELF_HELP, keywords: ['Ego', 'Enemy', 'Holiday', 'Stoicism', 'Humility', 'Success'] },
  { id: 'sh8', title: 'Good Vibes, Good Life', coverImage: '/Books/Self-Help/Good Vibes Good Life.jpg', author: 'Vex King', category: Category.SELF_HELP, keywords: ['Good Vibes', 'Good Life', 'Vex King', 'Positivity', 'Self-Love', 'Energy'] },
  { id: 'sh9', title: 'How to Talk to Anyone', coverImage: '/Books/Self-Help/htta92.jpg', author: 'Leil Lowndes', category: Category.SELF_HELP, keywords: ['How', 'to', 'Talk', 'Anyone', 'How to Talk to Anyone', 'htta92', 'Communication', 'Lowndes', 'Leil', 'Leil Lowndes', 'Social Skills', 'Conversation', 'People Skills'] },
  { id: 'sh10', title: 'Ikigai', coverImage: '/Books/Self-Help/Ikigai.jpg', author: 'Hector Garcia & Francesc Miralles', category: Category.SELF_HELP, keywords: ['Ikigai', 'Japanese', 'Purpose', 'Longevity', 'Happiness', 'Life Purpose', 'Okinawa'] },
  { id: 'sh11', title: 'Manifest', coverImage: '/Books/Self-Help/Manifest.jpg', author: 'Roxie Nafousi', category: Category.SELF_HELP, keywords: ['Manifest', 'Manifestation', 'Nafousi', 'Law of Attraction', 'Goals', 'Dreams'] },
  { id: 'sh12', title: 'Mindset', coverImage: '/Books/Self-Help/Mindset.jpg', author: 'Carol S. Dweck', category: Category.SELF_HELP, keywords: ['Mindset', 'Growth Mindset', 'Dweck', 'Psychology', 'Fixed Mindset', 'Success'] },
  { id: 'sh13', title: 'Never Split the Difference', coverImage: '/Books/Self-Help/Never Split the Difference.jpg', author: 'Chris Voss', category: Category.SELF_HELP, keywords: ['Never Split the Difference', 'Negotiation', 'Voss', 'FBI', 'Business', 'Communication'] },
  { id: 'sh14', title: 'Rich Dad Poor Dad', coverImage: '/Books/Self-Help/Rich Dad Poor Dad.jpg', author: 'Robert Kiyosaki', category: Category.SELF_HELP, keywords: ['Rich', 'Dad', 'Poor', 'Rich Dad', 'Poor Dad', 'Rich Dad Poor Dad', 'Kiyosaki', 'Robert', 'Robert Kiyosaki', 'Finance', 'Money', 'Investing', 'Wealth', 'Financial', 'Education', 'Financial Education'] },
  { id: 'sh15', title: 'The Art of War', coverImage: '/Books/Self-Help/Sun Tzu Art of War.jpg', author: 'Sun Tzu', category: Category.SELF_HELP, keywords: ['The', 'Art', 'of', 'War', 'Art of War', 'Sun', 'Tzu', 'Sun Tzu', 'Strategy', 'Military', 'Tactics', 'Classic', 'Chinese', 'Ancient'] },
  { id: 'sh16', title: 'The Art of Being Alone', coverImage: '/Books/Self-Help/The Art of Being Alone.jpg', author: 'Renuka Gavrani', category: Category.SELF_HELP, keywords: ['Being Alone', 'Solitude', 'Gavrani', 'Self-Discovery', 'Indian Author', 'Independence'] },
  { id: 'sh17', title: 'The Art of Laziness', coverImage: '/Books/Self-Help/The Art of Laziness.jpg', author: 'Library Mindset', category: Category.SELF_HELP, keywords: ['Laziness', 'Productivity', 'Library Mindset', 'Efficiency', 'Work Smart'] },
  { id: 'sh18', title: 'The Psychology of Money', coverImage: '/Books/Self-Help/The Psychology of Money.jpg', author: 'Morgan Housel', category: Category.SELF_HELP, keywords: ['The', 'Psychology', 'of', 'Money', 'Psychology of Money', 'The Psychology of Money', 'Housel', 'Morgan', 'Morgan Housel', 'Finance', 'Investing', 'Wealth', 'Behavior', 'Financial'] },
  { id: 'sh20', title: 'Think and Grow Rich', coverImage: '/Books/Self-Help/Think and Grow Rich.jpg', author: 'Napoleon Hill', category: Category.SELF_HELP, keywords: ['Think', 'and', 'Grow', 'Rich', 'Think and Grow Rich', 'Napoleon', 'Hill', 'Napoleon Hill', 'Wealth', 'Success', 'Classic', 'Mindset', 'Money'] },

  // ============ PERSONALITY DEVELOPMENT (31 books - Grouped by Author) ============
  // Robert Greene books together (5 books)
  { id: 'pd19', title: 'Mastery', coverImage: '/Books/Personality Development/Mastery.jpg', author: 'Robert Greene', category: Category.PERSONALITY_DEV, keywords: ['Mastery', 'Greene', 'Expert', 'Skill', 'Success', 'Greatness', 'Practice'] },
  { id: 'pd22', title: 'The 33 Strategies of War', coverImage: '/Books/Personality Development/The 33 Strategies of War.jpg', author: 'Robert Greene', category: Category.PERSONALITY_DEV, keywords: ['33 Strategies', 'War', 'Greene', 'Strategy', 'Tactics', 'Military', 'Business'] },
  { id: 'pd23', title: 'The 48 Laws of Power', coverImage: '/Books/Personality Development/The 48 Laws of Power.jpg', author: 'Robert Greene', category: Category.PERSONALITY_DEV, keywords: ['48 Laws', 'Power', 'Greene', 'Influence', 'Control', 'Leadership', 'Manipulation'] },
  { id: 'pd24', title: 'The Art of Seduction', coverImage: '/Books/Personality Development/The Art of Seduction.jpg', author: 'Robert Greene', category: Category.PERSONALITY_DEV, keywords: ['Seduction', 'Greene', 'Charm', 'Influence', 'Psychology', 'Attraction'] },
  { id: 'pd26', title: 'The Laws of Human Nature', coverImage: '/Books/Personality Development/The Laws of Human Nature.jpg', author: 'Robert Greene', category: Category.PERSONALITY_DEV, keywords: ['Human Nature', 'Laws', 'Greene', 'Psychology', 'Behavior', 'Understanding People'] },
  
  // Jen Sincero "You Are a Badass" series together (4 books)
  { id: 'pd2', title: 'Badass Habits', coverImage: '/Books/Personality Development/Badass Habits.jpg', author: 'Jen Sincero', category: Category.PERSONALITY_DEV, keywords: ['Badass', 'Habits', 'Sincero', 'Habit Formation', 'Self-Improvement', 'Change'] },
  { id: 'pd28', title: 'You Are a Badass at Making Money', coverImage: '/Books/Personality Development/You are a Badass at making money.jpg', author: 'Jen Sincero', category: Category.PERSONALITY_DEV, keywords: ['Badass', 'Money', 'Sincero', 'Wealth', 'Finance', 'Abundance', 'Mindset'] },
  { id: 'pd29', title: 'You Are a Badass Every Day', coverImage: '/Books/Personality Development/You are a Badass Everyday.jpg', author: 'Jen Sincero', category: Category.PERSONALITY_DEV, keywords: ['Badass', 'Every Day', 'Everyday', 'Sincero', 'Daily', 'Motivation', 'Inspiration'] },
  { id: 'pd30', title: 'You Are a Badass', coverImage: '/Books/Personality Development/You are a Badass.jpg', author: 'Jen Sincero', category: Category.PERSONALITY_DEV, keywords: ['Badass', 'Sincero', 'Self-Help', 'Confidence', 'Success', 'Motivation', 'Bestseller'] },
  
  // Thibaut Meurisse "Master Your..." series together (14 books)
  { id: 'pd9', title: 'Master Your Emotions', coverImage: '/Books/Personality Development/Master Your Emotions.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Emotions', 'Meurisse', 'Emotional Intelligence', 'EQ', 'Feelings', 'Control'] },
  { id: 'pd10', title: 'Master Your Beliefs', coverImage: '/Books/Personality Development/Master your beliefs.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Beliefs', 'Meurisse', 'Mindset', 'Limiting Beliefs', 'Self-Belief'] },
  { id: 'pd11', title: 'Master Your Decisions', coverImage: '/Books/Personality Development/Master your decisions.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Decisions', 'Meurisse', 'Decision Making', 'Choices', 'Thinking'] },
  { id: 'pd12', title: 'Master Your Destiny', coverImage: '/Books/Personality Development/Master your destiny.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Destiny', 'Meurisse', 'Future', 'Goals', 'Life Purpose'] },
  { id: 'pd13', title: 'Master Your Focus', coverImage: '/Books/Personality Development/Master your focus.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Focus', 'Meurisse', 'Concentration', 'Attention', 'Productivity', 'Deep Work'] },
  { id: 'pd14', title: 'Master Your Learning', coverImage: '/Books/Personality Development/Master your learning.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Learning', 'Meurisse', 'Study', 'Education', 'Skills', 'Knowledge'] },
  { id: 'pd15', title: 'Master Your Motivation', coverImage: '/Books/Personality Development/Master your motivation.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Motivation', 'Meurisse', 'Drive', 'Discipline', 'Inspiration', 'Action'] },
  { id: 'pd16', title: 'Master Your Success', coverImage: '/Books/Personality Development/Master your success.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Success', 'Meurisse', 'Achievement', 'Goals', 'Winning'] },
  { id: 'pd17', title: 'Master Your Thinking', coverImage: '/Books/Personality Development/Master your Thinking.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Thinking', 'Meurisse', 'Mental Models', 'Critical Thinking', 'Clarity'] },
  { id: 'pd18', title: 'Master Your Time', coverImage: '/Books/Personality Development/Master your time.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Master', 'Time', 'Meurisse', 'Time Management', 'Productivity', 'Schedule', 'Efficiency'] },
  { id: 'pd5', title: 'Dopamine Detox', coverImage: '/Books/Personality Development/Dopamine Detox.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Dopamine', 'Detox', 'Meurisse', 'Addiction', 'Reset', 'Digital Detox', 'Focus', 'Habits'] },
  { id: 'pd31', title: 'Immediate Action', coverImage: '/Books/Personality Development/Immediate Action.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Immediate Action', 'Meurisse', 'Action', 'Procrastination', 'Start', 'Do It Now'] },
  { id: 'pd20', title: 'Powerful Focus', coverImage: '/Books/Personality Development/Powerful Focus.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Powerful Focus', 'Focus', 'Meurisse', 'Concentration', 'Productivity', 'Deep Work'] },
  { id: 'pd21', title: 'Strategic Mindset', coverImage: '/Books/Personality Development/Strategic Mindset.jpg', author: 'Thibaut Meurisse', category: Category.PERSONALITY_DEV, keywords: ['Strategic', 'Mindset', 'Meurisse', 'Strategy', 'Planning', 'Goals', 'Thinking'] },
  
  // Other individual authors
  { id: 'pd1', title: 'Atomic Habits', coverImage: '/Books/Personality Development/Atomic Habits.jpg', author: 'James Clear', category: Category.PERSONALITY_DEV, keywords: ['Atomic Habits', 'Habits', 'Clear', 'James Clear', 'Habit Formation', '1%', 'Bestseller', 'Routine', 'Behavior Change'] },
  { id: 'pd3', title: "Build Don't Talk", coverImage: "/Books/Personality Development/Build Don't Talk.jpg", author: 'Raj Shamani', category: Category.PERSONALITY_DEV, keywords: ['Build Dont Talk', 'Shamani', 'Raj Shamani', 'Action', 'Entrepreneurship', 'Indian Author', 'Hustle'] },
  { id: 'pd6', title: 'How We Learn', coverImage: '/Books/Personality Development/How We Learn.jpg', author: 'Benedict Carey', category: Category.PERSONALITY_DEV, keywords: ['How We Learn', 'Learning', 'Carey', 'Brain', 'Memory', 'Study', 'Education', 'Science'] },
  { id: 'pd7', title: 'How to Talk to Anyone', coverImage: '/Books/Personality Development/How to Talk to anyone.jpg', author: 'Leil Lowndes', category: Category.PERSONALITY_DEV, keywords: ['Talk to Anyone', 'Communication', 'Lowndes', 'Social Skills', 'Conversation', 'Networking', 'Charisma'] },
  { id: 'pd8', title: 'How to Win Friends and Influence People', coverImage: '/Books/Personality Development/How to Win and Influence people.jpg', author: 'Dale Carnegie', category: Category.PERSONALITY_DEV, keywords: ['How', 'to', 'Win', 'Friends', 'and', 'Influence', 'People', 'Win Friends', 'Influence People', 'How to Win Friends and Influence People', 'Carnegie', 'Dale', 'Dale Carnegie', 'Classic', 'Social Skills', 'Networking', 'Bestseller'] },
  { id: 'pd25', title: 'The Courage to Be Disliked', coverImage: '/Books/Personality Development/The Courage to be disliked.jpg', author: 'Ichiro Kishimi & Fumitake Koga', category: Category.PERSONALITY_DEV, keywords: ['Courage to Be Disliked', 'Adlerian', 'Japanese', 'Philosophy', 'Freedom', 'Happiness', 'Psychology'] },
  { id: 'pd27', title: 'Think Like a Monk', coverImage: '/Books/Personality Development/Think like a Monk.jpg', author: 'Jay Shetty', category: Category.PERSONALITY_DEV, keywords: ['Think Like a Monk', 'Monk', 'Jay Shetty', 'Shetty', 'Wisdom', 'Peace', 'Mindfulness', 'Purpose', 'Spirituality'] },

  // ============ AUTOBIOGRAPHIES & BIOGRAPHIES (11 books - Grouped by Author) ============
  // Barack Obama books together
  { id: 'ab1', title: 'A Promised Land', coverImage: '/Books/Biographies & Autobiographies/A promised land - Barack Obama.jpg', author: 'Barack Obama', category: Category.AUTOBIOGRAPHIES, keywords: ['Promised Land', 'Obama', 'Barack Obama', 'President', 'USA', 'Politics', 'White House', 'Memoir'] },
  { id: 'ab5', title: 'Dreams from My Father', coverImage: '/Books/Biographies & Autobiographies/Dreams from my father - Barack Obama.jpg', author: 'Barack Obama', category: Category.AUTOBIOGRAPHIES, keywords: ['Dreams', 'Father', 'Obama', 'Barack Obama', 'Origin', 'Kenya', 'Memoir', 'Identity'] },
  
  // Dr. A.P.J. Abdul Kalam books together
  { id: 'ab8', title: 'The Missile Man of India', coverImage: '/Books/Biographies & Autobiographies/The Missile Man of India - Dr. APJ Abdul Kalam.jpg', author: 'Dr. A.P.J. Abdul Kalam', category: Category.AUTOBIOGRAPHIES, keywords: ['Missile Man', 'Kalam', 'APJ', 'Abdul Kalam', 'India', 'President', 'Scientist', 'ISRO', 'DRDO'] },
  { id: 'ab10', title: 'Wings of Fire', coverImage: '/Books/Biographies & Autobiographies/Wings of Fire - Dr. APJ Abdul Kalam.jpg', author: 'Dr. A.P.J. Abdul Kalam', category: Category.AUTOBIOGRAPHIES, keywords: ['Wings of Fire', 'Kalam', 'APJ', 'Abdul Kalam', 'India', 'Autobiography', 'Scientist', 'Inspiration', 'ISRO'] },
  
  // Individual authors
  { id: 'ab2', title: 'At Home with Muhammad Ali', coverImage: '/Books/Biographies & Autobiographies/At home with Muhammad Ali.jpg', author: 'Hana Ali', category: Category.AUTOBIOGRAPHIES, keywords: ['At', 'Home', 'with', 'At Home', 'Muhammad', 'Ali', 'Muhammad Ali', 'Boxing', 'Champion', 'Boxer', 'Legend', 'Sports', 'Cassius Clay', 'Hana', 'Hana Ali'] },
  { id: 'ab3', title: 'Becoming', coverImage: '/Books/Biographies & Autobiographies/Becoming - Michelle Obama.jpg', author: 'Michelle Obama', category: Category.AUTOBIOGRAPHIES, keywords: ['Becoming', 'Michelle Obama', 'Obama', 'First Lady', 'USA', 'Memoir', 'Inspiration', 'Women'] },
  { id: 'ab4', title: "Can't Hurt Me", coverImage: "/Books/Biographies & Autobiographies/Can't Hurt Me - David Goggins.jpg", author: 'David Goggins', category: Category.AUTOBIOGRAPHIES, keywords: ['Cant', 'Hurt', 'Me', 'Cant Hurt Me', "Can't Hurt Me", 'Goggins', 'David', 'David Goggins', 'Navy SEAL', 'Mental Toughness', 'Motivation', 'Running', 'Ultramarathon', 'Military'] },
  { id: 'ab6', title: 'Gandhi: An Autobiography', coverImage: '/Books/Biographies & Autobiographies/Gandhi.jpg', author: 'M.K. Gandhi', category: Category.AUTOBIOGRAPHIES, keywords: ['Gandhi', 'Mahatma Gandhi', 'India', 'Freedom', 'Independence', 'Non-Violence', 'Ahimsa', 'Father of Nation'] },
  { id: 'ab7', title: 'Long Walk to Freedom', coverImage: '/Books/Biographies & Autobiographies/Long Walk to Freedom - Nelson Mandela.jpg', author: 'Nelson Mandela', category: Category.AUTOBIOGRAPHIES, keywords: ['Long', 'Walk', 'to', 'Freedom', 'Long Walk', 'Long Walk to Freedom', 'Mandela', 'Nelson', 'Nelson Mandela', 'South Africa', 'Apartheid', 'President', 'Prison', 'Robben Island'] },
  { id: 'ab9', title: 'Thomas Edison: A Life From Beginning to End', coverImage: '/Books/Biographies & Autobiographies/Thomas Edison.jpg', author: 'Hourly History', category: Category.AUTOBIOGRAPHIES, keywords: ['Thomas', 'Edison', 'Thomas Edison', 'Life', 'Beginning', 'End', 'Inventor', 'Light Bulb', 'Electricity', 'Genius', 'Innovation', 'American', 'Hourly History'] },

  // ============ MARVEL (30 books - Grouped by Character/Theme) ============
  
  // --- SPIDER-MAN, VENOM & CARNAGE GROUP ---
  { id: 'mv1', title: 'Spider-Man', coverImage: '/Books/Marvel/Marvel Spider-Man.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Spiderman', 'Spider-man', 'Peter Parker', 'Web Slinger', 'Friendly Neighborhood', 'MCU'] },
  { id: 'mv2', title: 'The Amazing Spider-Man', coverImage: '/Books/Marvel/Marvel The Amazing Spider-Man.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Spiderman', 'Spider-man', 'Peter Parker', 'Amazing', 'Web Slinger', 'MCU'] },
  { id: 'mv3', title: 'Spider-Man: Black Suit & Blood', coverImage: '/Books/Marvel/Marvel Spider-Man Black Suit & Blood.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Spiderman', 'Spider-man', 'Symbiote', 'Black Suit', 'Venom', 'Peter Parker'] },
  { id: 'mv4', title: 'Spider-Man VS Venom', coverImage: '/Books/Marvel/Marvel Spider-Man VS Venom.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Spiderman', 'Spider-man', 'Venom', 'Eddie Brock', 'Symbiote', 'Peter Parker', 'VS', 'Battle'] },
  { id: 'mv5', title: 'Spider-Man VS Carnage', coverImage: '/Books/Marvel/Marvel Spider-Man VS Carnage.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Spiderman', 'Spider-man', 'Carnage', 'Cletus Kasady', 'Symbiote', 'Peter Parker', 'VS', 'Battle'] },
  { id: 'mv6', title: 'Venom: Let There Be Carnage', coverImage: '/Books/Marvel/Marvel Venom Let there be Carnage.png', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Venom', 'Let', 'There', 'Be', 'Carnage', 'Let There Be Carnage', 'Venom Let There Be Carnage', 'Eddie', 'Brock', 'Eddie Brock', 'Cletus', 'Kasady', 'Cletus Kasady', 'Symbiote', 'Spiderman', 'Spider-man', 'Tom Hardy', 'Marvel'] },
  { id: 'mv7', title: 'Venom VS Carnage', coverImage: '/Books/Marvel/Marvel Venom VS Carnage.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Venom', 'Carnage', 'Eddie Brock', 'Cletus Kasady', 'Symbiote', 'Spiderman', 'Spider-man', 'VS', 'Battle'] },
  { id: 'mv8', title: 'Carnage', coverImage: '/Books/Marvel/Marvel Carnage.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Carnage', 'Cletus Kasady', 'Symbiote', 'Venom', 'Spiderman', 'Spider-man', 'Villain', 'Serial Killer'] },
  
  // --- AVENGERS GROUP ---
  { id: 'mv9', title: 'The Avengers', coverImage: '/Books/Marvel/Marvel The Avengers.jpg', author: 'Stan Lee', category: Category.MARVEL, keywords: ['Avengers', 'Iron Man', 'Captain America', 'Thor', 'Hulk', 'MCU', 'Tony Stark', 'Steve Rogers'] },
  { id: 'mv10', title: 'The New Avengers', coverImage: '/Books/Marvel/Marvel The New Avengers.jpg', author: 'Brian Michael Bendis', category: Category.MARVEL, keywords: ['Avengers', 'New Avengers', 'Iron Man', 'Spider-man', 'Spiderman', 'Luke Cage', 'Wolverine'] },
  { id: 'mv11', title: 'Dark Avengers', coverImage: '/Books/Marvel/Marvel Dark Avengers.jpg', author: 'Brian Michael Bendis', category: Category.MARVEL, keywords: ['Avengers', 'Dark Avengers', 'Norman Osborn', 'Venom', 'Bullseye', 'Thunderbolts', 'Villain'] },
  { id: 'mv12', title: 'Avengers: Age of Ultron', coverImage: '/Books/Marvel/Marvel Avengers Age of Ultron.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Avengers', 'Ultron', 'Age of Ultron', 'Iron Man', 'Vision', 'MCU', 'AI', 'Robot'] },
  { id: 'mv13', title: 'Avengers: Civil War', coverImage: '/Books/Marvel/Marvel Avengers Civil War.jpg', author: 'Mark Millar', category: Category.MARVEL, keywords: ['Avengers', 'Civil War', 'Iron Man', 'Captain America', 'Spiderman', 'Spider-man', 'MCU', 'Tony Stark', 'Steve Rogers'] },
  { id: 'mv14', title: 'Avengers: Infinity War', coverImage: '/Books/Marvel/Marvel Avengers Infinity War.jpg', author: 'Jim Starlin', category: Category.MARVEL, keywords: ['Avengers', 'Infinity War', 'Thanos', 'Infinity Stones', 'Infinity Gauntlet', 'MCU', 'Snap', 'Titan'] },
  { id: 'mv15', title: 'Avengers: Endgame', coverImage: '/Books/Marvel/Marvel Avengers Endgame.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Avengers', 'Endgame', 'Thanos', 'Time Travel', 'Iron Man', 'Captain America', 'MCU', 'Final Battle'] },
  { id: 'mv16', title: 'Marvel Zombies', coverImage: '/Books/Marvel/Marvel Avengers Zombies.jpg', author: 'Robert Kirkman', category: Category.MARVEL, keywords: ['Zombies', 'Marvel Zombies', 'Avengers', 'Horror', 'Undead', 'What If', 'Alternate Universe'] },
  
  // --- THANOS GROUP ---
  { id: 'mv17', title: 'Thanos', coverImage: '/Books/Marvel/Marvel Thanos.jpg', author: 'Jim Starlin', category: Category.MARVEL, keywords: ['Thanos', 'Mad Titan', 'Infinity Stones', 'Infinity Gauntlet', 'Villain', 'Titan', 'Death', 'Avengers'] },
  { id: 'mv18', title: 'Marvel Tales: Thanos', coverImage: '/Books/Marvel/Marvel Tales Thanos.jpg', author: 'Jim Starlin', category: Category.MARVEL, keywords: ['Marvel', 'Tales', 'Thanos', 'Marvel Tales', 'Marvel Tales Thanos', 'Mad Titan', 'Mad', 'Titan', 'Infinity', 'Villain', 'Origin', 'Starlin', 'Jim', 'Jim Starlin'] },
  { id: 'mv19', title: 'Thanos: Return of the Mad Titan', coverImage: '/Books/Marvel/Marvel Thanos Return of the Mad Titan.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Thanos', 'Return', 'of', 'the', 'Mad', 'Titan', 'Mad Titan', 'Return of the Mad Titan', 'Thanos Return', 'Villain', 'Infinity', 'Cosmic', 'Avengers', 'Marvel'] },
  
  // --- DOOM GROUP ---
  { id: 'mv20', title: 'Doctor Doom', coverImage: '/Books/Marvel/Marvel Doctor Doom.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Doom', 'Dr. Doom', 'Dr Doom', 'Doctor Doom', 'Victor Von Doom', 'Latveria', 'Fantastic Four', 'F4', 'Villain'] },
  { id: 'mv21', title: 'Iron Man: Legacy of Doom', coverImage: '/Books/Marvel/Marvel Iron Man Legacy of Doom.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Doom', 'Dr. Doom', 'Dr Doom', 'Doctor Doom', 'Iron Man', 'Tony Stark', 'Victor Von Doom', 'Legacy'] },
  
  // --- KANG GROUP ---
  { id: 'mv22', title: 'Kang', coverImage: '/Books/Marvel/Marvel Kang.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Kang', 'Kang the Conqueror', 'Time Travel', 'Nathaniel Richards', 'Villain', 'Avengers', 'Multiverse', 'Loki'] },
  { id: 'mv23', title: 'The Kang Avengers', coverImage: '/Books/Marvel/Marvel The Kang Avengers.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Kang', 'Kang the Conqueror', 'Avengers', 'Time Travel', 'Multiverse', 'Dynasty'] },
  
  // --- KNULL & GALACTUS GROUP ---
  { id: 'mv24', title: 'Knull', coverImage: '/Books/Marvel/Marvel Knull.jpg', author: 'Donny Cates', category: Category.MARVEL, keywords: ['Knull', 'God of Symbiotes', 'King in Black', 'Symbiote', 'Venom', 'Dark God', 'All-Black'] },
  { id: 'mv25', title: 'The Origin of Galactus', coverImage: '/Books/Marvel/Marvel The Origin of Galactus.jpg', author: 'Marvel Comics', category: Category.MARVEL, keywords: ['Galactus', 'Devourer of Worlds', 'Cosmic', 'Silver Surfer', 'Herald', 'Fantastic Four', 'F4', 'Origin'] },
  
  // --- X-MEN & WARS GROUP ---
  { id: 'mv26', title: 'X-Men', coverImage: '/Books/Marvel/Marvel X - men.jpg', author: 'Chris Claremont', category: Category.MARVEL, keywords: ['X-Men', 'Xmen', 'X Men', 'Mutants', 'Wolverine', 'Cyclops', 'Jean Grey', 'Professor X', 'Magneto', 'Xavier'] },
  { id: 'mv27', title: 'Avengers VS X-Men', coverImage: '/Books/Marvel/Marvel Avengers VS X - Men.jpg', author: 'Jason Aaron', category: Category.MARVEL, keywords: ['Avengers', 'X-Men', 'Xmen', 'X Men', 'VS', 'Battle', 'Phoenix Force', 'Cyclops', 'Captain America'] },
  { id: 'mv28', title: 'Secret Wars', coverImage: '/Books/Marvel/Marvel Midnight Secret Wars.jpg', author: 'Jonathan Hickman', category: Category.MARVEL, keywords: ['Secret', 'Wars', 'Secret Wars', 'Midnight', 'Midnight Secret Wars', 'Marvel Midnight Secret Wars', 'Battleworld', 'Doom', 'Dr Doom', 'Doctor Doom', 'Multiverse', 'Event', 'Crossover', 'Hickman', 'Jonathan'] },
  { id: 'mv29', title: 'Time Runs Out', coverImage: '/Books/Marvel/Marvel Time Runs Out.jpg', author: 'Jonathan Hickman', category: Category.MARVEL, keywords: ['Time', 'Runs', 'Out', 'Time Runs Out', 'Marvel Time Runs Out', 'Wars', 'Avengers', 'Incursion', 'Multiverse', 'Illuminati', 'Event', 'Hickman', 'Jonathan'] },
  { id: 'mv30', title: 'Midnight Sons', coverImage: '/Books/Marvel/Marvel Midnight Sons.jpg', author: 'Howard Mackie', category: Category.MARVEL, keywords: ['Midnight', 'Sons', 'Midnight Sons', 'Marvel Midnight Sons', 'Ghost Rider', 'Ghost', 'Rider', 'Blade', 'Morbius', 'Doctor Strange', 'Strange', 'Supernatural', 'Horror', 'Dark', 'Mackie', 'Howard'] },

  // ============ COMICS (10 books - Grouped by Author/Series) ============
  // Robert Kirkman books together
  { id: 'cm3', title: 'Invincible Compendium One', coverImage: '/Books/Comics/Invincible compendium one.jpg', author: 'Robert Kirkman', category: Category.COMICS, keywords: ['Invincible', 'Compendium', 'One', 'Compendium One', 'Invincible Compendium', 'Invincible Compendium One', 'Kirkman', 'Robert', 'Robert Kirkman', 'Mark', 'Grayson', 'Mark Grayson', 'Omni-Man', 'Omni Man', 'Amazon Prime', 'Superhero', 'Image Comics'] },
  { id: 'cm4', title: 'Invincible', coverImage: '/Books/Comics/Invincible.jpg', author: 'Robert Kirkman', category: Category.COMICS, keywords: ['Invincible', 'Kirkman', 'Mark Grayson', 'Omni-Man', 'Viltrumite', 'Amazon Prime', 'Superhero', 'Animated'] },
  { id: 'cm9', title: 'The Walking Dead: Days Gone Bye', coverImage: '/Books/Comics/The Walking Dead Days Gone Bye.jpg', author: 'Robert Kirkman', category: Category.COMICS, keywords: ['The', 'Walking', 'Dead', 'Days', 'Gone', 'Bye', 'Walking Dead', 'Days Gone Bye', 'The Walking Dead', 'The Walking Dead Days Gone Bye', 'Kirkman', 'Robert', 'Robert Kirkman', 'Rick', 'Grimes', 'Rick Grimes', 'Zombies', 'TWD', 'AMC', 'Horror', 'Survival'] },
  { id: 'cm10', title: 'The Walking Dead', coverImage: '/Books/Comics/The Walking Dead.jpg', author: 'Robert Kirkman', category: Category.COMICS, keywords: ['The', 'Walking', 'Dead', 'Walking Dead', 'The Walking Dead', 'Kirkman', 'Robert', 'Robert Kirkman', 'Rick', 'Grimes', 'Rick Grimes', 'Zombies', 'TWD', 'AMC', 'Horror', 'Survival', 'Negan'] },
  
  // Garth Ennis - The Boys together
  { id: 'cm7', title: 'The Boys Volume 1', coverImage: '/Books/Comics/The Boys Volume 1.jpg', author: 'Garth Ennis', category: Category.COMICS, keywords: ['The', 'Boys', 'Volume', '1', 'Volume 1', 'The Boys', 'The Boys Volume 1', 'Ennis', 'Garth', 'Garth Ennis', 'Butcher', 'Billy Butcher', 'Homelander', 'Amazon Prime', 'Superhero', 'Dark', 'Violent'] },
  { id: 'cm8', title: 'The Boys', coverImage: '/Books/Comics/The Boys.jpg', author: 'Garth Ennis', category: Category.COMICS, keywords: ['The Boys', 'Boys', 'Ennis', 'Butcher', 'Hughie', 'Homelander', 'Vought', 'Amazon Prime', 'Gen V'] },
  
  // Batman books together
  { id: 'cm1', title: 'Batman: Kings of Fear', coverImage: '/Books/Comics/Batman Kings of Fear.jpg', author: 'Scott Peterson', category: Category.COMICS, keywords: ['Batman', 'Kings', 'of', 'Fear', 'Kings of Fear', 'Batman Kings of Fear', 'Scarecrow', 'DC', 'DC Comics', 'Gotham', 'Dark Knight', 'Bruce', 'Wayne', 'Bruce Wayne', 'Peterson', 'Scott'] },
  { id: 'cm2', title: 'Batman', coverImage: '/Books/Comics/Batman.jpg', author: 'Scott Snyder', category: Category.COMICS, keywords: ['Batman', 'Snyder', 'DC Comics', 'DC', 'Gotham', 'Dark Knight', 'Bruce Wayne', 'Joker', 'Court of Owls'] },
  
  // Other DC
  { id: 'cm5', title: 'Justice League', coverImage: '/Books/Comics/Justice League.jpg', author: 'Geoff Johns', category: Category.COMICS, keywords: ['Justice', 'League', 'Justice League', 'JL', 'DC', 'DC Comics', 'Superman', 'Batman', 'Wonder Woman', 'Diana', 'Flash', 'Aquaman', 'Green Lantern', 'Johns', 'Geoff', 'Geoff Johns'] },
  { id: 'cm6', title: 'Superman', coverImage: '/Books/Comics/Superman.jpg', author: 'Grant Morrison', category: Category.COMICS, keywords: ['Superman', 'Clark Kent', 'DC Comics', 'DC', 'Metropolis', 'Man of Steel', 'Krypton', 'Kal-El', 'Lois Lane'] },

  // ============ MANGA (30 books - Grouped by Series/Theme) ============
  
  // --- DRAGON BALL GROUP ---
  { id: 'mg1', title: 'Dragon Ball', coverImage: '/Books/Manga/Dragpn Ball.jpg', author: 'Akira Toriyama', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'Dragon Ball', 'DragonBall', 'Dragonball', 'Dragpn', 'DB', 'Goku', 'Son Goku', 'Son', 'Kakarot', 'Saiyan', 'Kamehameha', 'Anime', 'DBZ', 'Toriyama', 'Akira'] },
  { id: 'mg2', title: 'Dragon Ball Z', coverImage: '/Books/Manga/Dragpn Ball Z.jpg', author: 'Akira Toriyama', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'Z', 'Dragon Ball Z', 'DragonBall Z', 'Dragonball Z', 'Dragpn', 'DBZ', 'DB', 'Goku', 'Vegeta', 'Gohan', 'Frieza', 'Cell', 'Buu', 'Super Saiyan', 'SSJ', 'Kakarot', 'Toriyama', 'Akira'] },
  { id: 'mg3', title: 'Dragon Ball Super', coverImage: '/Books/Manga/Dragon Ball Super.jpg', author: 'Akira Toriyama & Toyotarou', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'Super', 'Dragon Ball Super', 'DragonBall Super', 'Dragonball Super', 'DBS', 'DB', 'Goku', 'Vegeta', 'Beerus', 'Jiren', 'Ultra Instinct', 'UI', 'Tournament of Power', 'Broly', 'Toriyama', 'Toyotarou'] },
  { id: 'mg4', title: 'Dragon Ball GT', coverImage: '/Books/Manga/Dragon Ball GT.jpg', author: 'Akira Toriyama', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'GT', 'Dragon Ball GT', 'DragonBall GT', 'Dragonball GT', 'DBGT', 'DB', 'Goku', 'SSJ4', 'Super Saiyan 4', 'Pan', 'Baby', 'Shadow Dragons', 'Toriyama'] },
  { id: 'mg5', title: 'Dragon Ball Daima', coverImage: '/Books/Manga/Dragon Ball Daima.jpg', author: 'Akira Toriyama', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'Daima', 'Dragon Ball Daima', 'DragonBall Daima', 'Dragonball Daima', 'DB', 'Goku', 'Mini Goku', 'Mini', 'New Series', '2024', 'Toriyama'] },
  { id: 'mg6', title: 'Dragon Ball: Bardock', coverImage: '/Books/Manga/Dragon Ball Bardock.jpg', author: 'Akira Toriyama', category: Category.MANGA, keywords: ['Dragon', 'Ball', 'Bardock', 'Dragon Ball Bardock', 'DragonBall', 'Dragonball', 'DB', 'Goku Father', 'Father', 'Saiyan', 'Origin', 'Planet Vegeta', 'Frieza', 'Toriyama'] },
  
  // --- BLACK CLOVER, BUTLER, DEATH NOTE, BERSERK, CHAINSAW MAN GROUP ---
  { id: 'mg7', title: 'Black Clover', coverImage: '/Books/Manga/Black Clover.jpg', author: 'Yuki Tabata', category: Category.MANGA, keywords: ['Black Clover', 'Asta', 'Yuno', 'Magic', 'Black Bulls', 'Wizard King', 'Anti-Magic', 'Clover Kingdom', 'Anime'] },
  { id: 'mg8', title: 'Black Butler', coverImage: '/Books/Manga/Black Butler.jpg', author: 'Yana Toboso', category: Category.MANGA, keywords: ['Black Butler', 'Kuroshitsuji', 'Sebastian', 'Ciel', 'Demon Butler', 'Victorian', 'Dark Fantasy', 'Anime'] },
  { id: 'mg9', title: 'Death Note', coverImage: '/Books/Manga/Death Note.jpg', author: 'Tsugumi Ohba & Takeshi Obata', category: Category.MANGA, keywords: ['Death Note', 'DeathNote', 'Light Yagami', 'L', 'Ryuk', 'Kira', 'Shinigami', 'Mystery', 'Thriller', 'Anime', 'Netflix'] },
  { id: 'mg10', title: 'Berserk', coverImage: '/Books/Manga/Berserk.jpg', author: 'Kentaro Miura', category: Category.MANGA, keywords: ['Berserk', 'Guts', 'Griffith', 'Band of the Hawk', 'Dark Fantasy', 'Eclipse', 'Casca', 'God Hand', 'Dragonslayer', 'Classic'] },
  { id: 'mg11', title: 'Chainsaw Man', coverImage: '/Books/Manga/Chainsaw Man.jpg', author: 'Tatsuki Fujimoto', category: Category.MANGA, keywords: ['Chainsaw Man', 'ChainsawMan', 'Denji', 'Pochita', 'Makima', 'Power', 'Devil', 'Horror', 'Anime', 'MAPPA'] },
  
  // --- BAKI GROUP ---
  { id: 'mg12', title: 'Baki', coverImage: '/Books/Manga/Baki.jpg', author: 'Keisuke Itagaki', category: Category.MANGA, keywords: ['Baki', 'Baki Hanma', 'Martial Arts', 'Fighting', 'Yujiro', 'Strongest', 'Netflix', 'Anime', 'Grappler'] },
  { id: 'mg13', title: 'Hanma Baki', coverImage: '/Books/Manga/Hanma Baki.jpg', author: 'Keisuke Itagaki', category: Category.MANGA, keywords: ['Hanma Baki', 'Baki', 'Son of Ogre', 'Yujiro Hanma', 'Martial Arts', 'Fighting', 'Strongest Creature'] },
  
  // --- DAN DA DAN, HAIKYU, WINDBREAKER GROUP ---
  { id: 'mg14', title: 'Dan Da Dan', coverImage: '/Books/Manga/Dan da Dan.jpg', author: 'Yukinobu Tatsu', category: Category.MANGA, keywords: ['Dan Da Dan', 'Dandadan', 'DanDaDan', 'Okarun', 'Momo', 'Aliens', 'Ghosts', 'Supernatural', 'Romance', 'Anime', '2024'] },
  { id: 'mg15', title: 'Haikyu!!', coverImage: '/Books/Manga/Haikyu.jpg', author: 'Haruichi Furudate', category: Category.MANGA, keywords: ['Haikyu', 'Haikyuu', 'Haikyuu!!', 'Haikyu!!', 'Volleyball', 'Volley', 'Ball', 'Hinata', 'Shoyo', 'Kageyama', 'Tobio', 'Sports', 'Karasuno', 'Anime', 'Jump', 'Furudate'] },
  { id: 'mg16', title: 'Windbreaker', coverImage: '/Books/Manga/Windbreaker.jpg', author: 'Satoru Nii', category: Category.MANGA, keywords: ['Windbreaker', 'Wind', 'Breaker', 'Wind Breaker', 'Sakura', 'Haruka', 'Delinquent', 'Bofurin', 'Fighting', 'Gang', 'Anime', '2024', 'Nii', 'Satoru'] },
  
  // --- POPULAR CLASSICS & FAVORITES ---
  { id: 'mg17', title: 'Attack on Titan', coverImage: '/Books/Manga/Attack On Titan.jpg', author: 'Hajime Isayama', category: Category.MANGA, keywords: ['Attack', 'On', 'Titan', 'Attack on Titan', 'Attack On Titan', 'AOT', 'Shingeki no Kyojin', 'Shingeki', 'SNK', 'Eren', 'Mikasa', 'Levi', 'Titans', 'Anime', 'Classic', 'Isayama', 'Hajime'] },
  { id: 'mg18', title: 'Bleach', coverImage: '/Books/Manga/Bleach.jpg', author: 'Tite Kubo', category: Category.MANGA, keywords: ['Bleach', 'Ichigo', 'Kurosaki', 'Soul Reaper', 'Shinigami', 'Bankai', 'Hollow', 'Anime', 'Classic', 'TYBW'] },
  { id: 'mg19', title: 'Demon Slayer', coverImage: '/Books/Manga/Demon Slayer.jpg', author: 'Koyoharu Gotouge', category: Category.MANGA, keywords: ['Demon', 'Slayer', 'Demon Slayer', 'DemonSlayer', 'Kimetsu', 'no', 'Yaiba', 'Kimetsu no Yaiba', 'KNY', 'Tanjiro', 'Kamado', 'Nezuko', 'Hashira', 'Anime', 'Muzan', 'Breathing', 'Gotouge', 'Koyoharu'] },
  { id: 'mg20', title: 'Jujutsu Kaisen', coverImage: '/Books/Manga/Jujutsu Kaisen.jpg', author: 'Gege Akutami', category: Category.MANGA, keywords: ['Jujutsu', 'Kaisen', 'Jujutsu Kaisen', 'JujutsuKaisen', 'JJK', 'Yuji', 'Itadori', 'Yuji Itadori', 'Gojo', 'Satoru', 'Sukuna', 'Curse', 'Sorcerer', 'Anime', 'MAPPA', 'Akutami', 'Gege'] },
  { id: 'mg21', title: 'Kaiju No. 8', coverImage: '/Books/Manga/Kaiju No. 8.jpg', author: 'Naoya Matsumoto', category: Category.MANGA, keywords: ['Kaiju No 8', 'Kaiju No. 8', 'Kaiju 8', 'Kafka', 'Monster', 'Defense Force', 'Anime', '2024'] },
  { id: 'mg22', title: 'My Hero Academia', coverImage: '/Books/Manga/My Hero Academia.jpg', author: 'Kohei Horikoshi', category: Category.MANGA, keywords: ['My', 'Hero', 'Academia', 'My Hero', 'My Hero Academia', 'MHA', 'Boku', 'no', 'Boku no Hero', 'BnHA', 'Deku', 'Izuku', 'Midoriya', 'Izuku Midoriya', 'All Might', 'Quirk', 'Anime', 'Horikoshi', 'Kohei'] },
  { id: 'mg23', title: 'One Piece', coverImage: '/Books/Manga/One Piece.jpg', author: 'Eiichiro Oda', category: Category.MANGA, keywords: ['One', 'Piece', 'One Piece', 'OnePiece', 'Luffy', 'Monkey D Luffy', 'Straw Hat', 'Pirate', 'Zoro', 'Nami', 'Sanji', 'Grand Line', 'Devil Fruit', 'Anime', 'Gear 5', 'Oda', 'Eiichiro'] },
  { id: 'mg24', title: 'One Punch Man', coverImage: '/Books/Manga/One Punch Man.jpg', author: 'ONE & Yusuke Murata', category: Category.MANGA, keywords: ['One', 'Punch', 'Man', 'One Punch', 'One Punch Man', 'OPM', 'Saitama', 'Genos', 'Hero', 'Parody', 'Comedy', 'Anime', 'Bald Cape', 'Murata', 'ONE'] },
  { id: 'mg25', title: 'Solo Leveling', coverImage: '/Books/Manga/Solo Leveling.jpg', author: 'Chugong', category: Category.MANGA, keywords: ['Solo', 'Leveling', 'Solo Leveling', 'SoloLeveling', 'Sung', 'Jin', 'Woo', 'Sung Jin-Woo', 'Sung Jin Woo', 'Jin Woo', 'Hunter', 'Manhwa', 'Korean', 'Arise', 'Shadow', 'Shadow Monarch', 'Anime', '2024', 'Chugong'] },
  { id: 'mg26', title: 'Vinland Saga', coverImage: '/Books/Manga/Vinland Saga.jpg', author: 'Makoto Yukimura', category: Category.MANGA, keywords: ['Vinland Saga', 'Thorfinn', 'Vikings', 'Historical', 'Anime', 'Canute', 'Askeladd', 'Warrior', 'Peace'] },
  { id: 'mg27', title: 'Full Metal Alchemist', coverImage: '/Books/Manga/Full Metal Alchemist.jpg', author: 'Hiromu Arakawa', category: Category.MANGA, keywords: ['Full', 'Metal', 'Alchemist', 'Full Metal', 'Full Metal Alchemist', 'FMA', 'Fullmetal', 'FullMetal Alchemist', 'Edward', 'Elric', 'Edward Elric', 'Alphonse', 'Al', 'Alchemy', 'Brotherhood', 'FMAB', 'Classic', 'Anime', 'Arakawa', 'Hiromu'] },
  { id: 'mg28', title: 'Blue Lock', coverImage: '/Books/Manga/Blue Lock.jpg', author: 'Muneyuki Kaneshiro & Yusuke Nomura', category: Category.MANGA, keywords: ['Blue', 'Lock', 'Blue Lock', 'BlueLock', 'Isagi', 'Yoichi', 'Soccer', 'Football', 'Sports', 'Striker', 'Ego', 'Anime', 'Kaneshiro', 'Nomura'] },
  { id: 'mg29', title: "Hell's Paradise", coverImage: "/Books/Manga/Hell's Paradise.jpg", author: 'Yuji Kaku', category: Category.MANGA, keywords: ["Hell's Paradise", 'Hells Paradise', 'Jigokuraku', 'Gabimaru', 'Ninja', 'Island', 'MAPPA', 'Anime', 'Dark Fantasy'] },
  { id: 'mg30', title: 'Monster', coverImage: '/Books/Manga/Monster.jpg', author: 'Naoki Urasawa', category: Category.MANGA, keywords: ['Monster', 'Johan', 'Tenma', 'Psychological', 'Thriller', 'Mystery', 'Classic', 'Masterpiece', 'Anime'] },

  // ============ STUDY (14 books - Grouped by Author/Series) ============
  // DK Handbooks together (7 books)
  { id: 'st1', title: 'Birds of the World', coverImage: '/Books/Study/Birds of the world - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Birds', 'World', 'DK', 'Handbook', 'Nature', 'Animals', 'Wildlife', 'Ornithology', 'Encyclopedia'] },
  { id: 'st2', title: 'Butterflies & Moths', coverImage: '/Books/Study/Butterflies & Moths - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Butterflies', 'Moths', 'DK', 'Handbook', 'Insects', 'Nature', 'Wildlife', 'Encyclopedia'] },
  { id: 'st3', title: 'Dinosaurs', coverImage: '/Books/Study/Dinosaurs - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Dinosaurs', 'DK', 'Handbook', 'Prehistoric', 'Fossils', 'T-Rex', 'Jurassic', 'Encyclopedia'] },
  { id: 'st4', title: 'Gemstones', coverImage: '/Books/Study/Gemstones - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Gemstones', 'Gems', 'DK', 'Handbook', 'Crystals', 'Minerals', 'Jewelry', 'Precious Stones', 'Encyclopedia'] },
  { id: 'st10', title: 'Insects', coverImage: '/Books/Study/Insects - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Insects', 'DK', 'Handbook', 'Bugs', 'Entomology', 'Nature', 'Wildlife', 'Encyclopedia'] },
  { id: 'st13', title: 'Reptiles and Amphibians', coverImage: '/Books/Study/Reptiles and Amphibhians - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Reptiles', 'Amphibians', 'DK', 'Handbook', 'Snakes', 'Lizards', 'Frogs', 'Nature', 'Encyclopedia'] },
  { id: 'st14', title: 'Stars & Planets', coverImage: '/Books/Study/Stars & Planets - DK Handbooks.jpg', author: 'DK Handbooks', category: Category.STUDY, keywords: ['Stars', 'Planets', 'DK', 'Handbook', 'Space', 'Astronomy', 'Solar System', 'Galaxy', 'Universe', 'Encyclopedia'] },
  
  // Cambridge IELTS books together (5 books)
  { id: 'st5', title: 'IELTS 11', coverImage: '/Books/Study/IELTS 11.jpg', author: 'Cambridge University Press', category: Category.STUDY, keywords: ['IELTS', 'IELTS 11', 'Cambridge', 'English', 'Test', 'Exam', 'Preparation', 'Academic', 'Study Abroad'] },
  { id: 'st6', title: 'IELTS 14', coverImage: '/Books/Study/IELTS 14.jpg', author: 'Cambridge University Press', category: Category.STUDY, keywords: ['IELTS', 'IELTS 14', 'Cambridge', 'English', 'Test', 'Exam', 'Preparation', 'Academic', 'Study Abroad'] },
  { id: 'st7', title: 'IELTS 16', coverImage: '/Books/Study/IELTS 16.jpg', author: 'Cambridge University Press', category: Category.STUDY, keywords: ['IELTS', 'IELTS 16', 'Cambridge', 'English', 'Test', 'Exam', 'Preparation', 'Academic', 'Study Abroad'] },
  { id: 'st8', title: 'IELTS 19 (GT)', coverImage: '/Books/Study/IELTS 19 (GT).jpg', author: 'Cambridge University Press', category: Category.STUDY, keywords: ['IELTS', 'IELTS 19', 'GT', 'General Training', 'Cambridge', 'English', 'Test', 'Immigration'] },
  { id: 'st9', title: 'IELTS 19', coverImage: '/Books/Study/IELTS 19.jpg', author: 'Cambridge University Press', category: Category.STUDY, keywords: ['IELTS', 'IELTS 19', 'Cambridge', 'English', 'Test', 'Exam', 'Preparation', 'Academic', 'Latest'] },
  
  // Pearson PTE books together
  { id: 'st11', title: 'PTE Guide', coverImage: '/Books/Study/PTE Guide.jpg', author: 'Pearson', category: Category.STUDY, keywords: ['PTE', 'Pearson', 'Guide', 'English', 'Test', 'Exam', 'Preparation', 'Study Abroad', 'Immigration'] },
  { id: 'st12', title: 'PTE', coverImage: '/Books/Study/PTE.jpg', author: 'Pearson', category: Category.STUDY, keywords: ['PTE', 'Pearson', 'English', 'Test', 'Exam', 'Academic', 'Study Abroad', 'Immigration'] },

  // ============ OTHERS (2 books) ============
  { id: 'ot1', title: 'Look Out for the Little Guy', coverImage: '/Books/Others/Look out for the Little Guy - Scott Lang.jpg', author: 'Scott Lang', category: Category.OTHERS, keywords: ['Look', 'Out', 'for', 'the', 'Little', 'Guy', 'Look Out', 'Little Guy', 'Look Out for the Little Guy', 'Scott', 'Lang', 'Scott Lang', 'Ant-Man', 'Ant Man', 'AntMan', 'Marvel', 'MCU', 'Superhero', 'Avengers', 'Comedy', 'Memoir', 'Paul Rudd'] },
  { id: 'ot2', title: 'The Marvel Cinematic Universe Timeline Book', coverImage: '/Books/Others/The Marvel Cinematic Universe Timeline Book.jpg', author: 'Marvel', category: Category.OTHERS, keywords: ['The', 'Marvel', 'Cinematic', 'Universe', 'Timeline', 'Book', 'Marvel Cinematic Universe', 'MCU', 'MCU Timeline', 'Timeline Book', 'The Marvel Cinematic Universe Timeline Book', 'Avengers', 'Iron Man', 'Movies', 'Reference', 'Guide', 'History'] },

  // ============ PROMPTS (1 book) ============
  { id: 'pr1', title: 'The Ultimate Prompt Book', coverImage: '/Books/Prompts/The Ultimate Prompt Book - AI Fiesta.jpg', author: 'AI Fiesta', category: Category.PROMPTS, keywords: ['The', 'Ultimate', 'Prompt', 'Book', 'Prompt Book', 'Ultimate Prompt', 'The Ultimate Prompt Book', 'AI', 'Fiesta', 'AI Fiesta', 'Prompts', 'ChatGPT', 'GPT', 'Writing', 'Creative', 'Midjourney', 'Stable Diffusion', 'LLM', 'Guide', 'Templates'] },
];

export const THEMES: ThemeColors[] = [
  { primary: '#00f3ff', secondary: '#0057ff', glow: 'rgba(0, 243, 255, 0.6)' }, // Cyan/Neon Blue -> Deep Blue
  { primary: '#bf00ff', secondary: '#4c00ff', glow: 'rgba(191, 0, 255, 0.6)' }, // Neon Purple -> Deep Violet
  { primary: '#00ff41', secondary: '#005f16', glow: 'rgba(0, 255, 65, 0.6)' },  // Matrix Green -> Dark Green
  { primary: '#ff0055', secondary: '#890022', glow: 'rgba(255, 0, 85, 0.6)' },  // Cyber Pink -> Dark Red
  
  // Expanded Palette (Red, Green, Pink, Violet, Orange, Blue, etc.) - All with Gradients
  { primary: '#FF0000', secondary: '#8B0000', glow: 'rgba(255, 0, 0, 0.6)' }, // Red -> Dark Red
  { primary: '#00FF00', secondary: '#006400', glow: 'rgba(0, 255, 0, 0.6)' }, // Green -> Dark Green
  { primary: '#EE82EE', secondary: '#9400D3', glow: 'rgba(238, 130, 238, 0.6)' }, // Violet -> Dark Violet
  { primary: '#0000FF', secondary: '#00008B', glow: 'rgba(0, 0, 255, 0.6)' }, // Blue -> Dark Blue
  { primary: '#800080', secondary: '#4B0082', glow: 'rgba(128, 0, 128, 0.6)' }, // Purple -> Indigo
  { primary: '#D8BFD8', secondary: '#8A2BE2', glow: 'rgba(216, 191, 216, 0.6)' }, // Purpleish-Pink (Thistle) -> Blue Violet
  { primary: '#663399', secondary: '#483D8B', glow: 'rgba(102, 51, 153, 0.6)' }, // Bluish-Purple (RebeccaPurple) -> Dark Slate Blue
  { primary: '#E91E63', secondary: '#880E4F', glow: 'rgba(233, 30, 99, 0.6)' }, // Reddish-Pink -> Deep Pink
  { primary: '#FFC0CB', secondary: '#FF1493', glow: 'rgba(255, 192, 203, 0.6)' }, // Pink -> Deep Pink
  { primary: '#FFA500', secondary: '#FF4500', glow: 'rgba(255, 165, 0, 0.6)' }, // Orange -> Orange Red
  { primary: '#00FFFF', secondary: '#008B8B', glow: 'rgba(0, 255, 255, 0.6)' }, // Cyan -> Dark Cyan
  { primary: '#00008B', secondary: '#191970', glow: 'rgba(0, 0, 139, 0.6)' }, // Dark Blue -> Midnight Blue
  { primary: '#2E8B57', secondary: '#006400', glow: 'rgba(46, 139, 87, 0.6)' }, // Sea Green -> Dark Green
  { primary: '#006994', secondary: '#00334D', glow: 'rgba(0, 105, 148, 0.6)' }, // Sea Blue -> Deep Sea Blue
  { primary: '#800000', secondary: '#400000', glow: 'rgba(128, 0, 0, 0.6)' }, // Maroon -> Dark Maroon
  { primary: '#A52A2A', secondary: '#5e1616', glow: 'rgba(165, 42, 42, 0.6)' }, // Reddish Brown -> Dark Brown
];
