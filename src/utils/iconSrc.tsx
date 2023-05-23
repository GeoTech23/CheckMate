export default function iconSrc(relationship) {
  switch (relationship) {
    case 'family':
      return '../../src/assets/blue.png';
    case 'friend':
      return '../../src/assets/green.png';
    case 'significant other':
      return '../../src/assets/red.png';
  }
}