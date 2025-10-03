export function createDefaultImage(): string {
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  if (!tempCtx) {
    return '';
  }
  const size = 200;
  tempCanvas.width = size;
  tempCanvas.height = size;

  // Create animated particle-like gradient background with better contrast
  const gradient = tempCtx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 1.4
  );
  // Use colors with better contrast that work in both light and dark modes
  gradient.addColorStop(0, '#4f46e5'); // Indigo
  gradient.addColorStop(0.3, '#7c3aed'); // Violet
  gradient.addColorStop(0.6, '#ec4899'); // Pink
  gradient.addColorStop(1, '#ef4444'); // Red

  tempCtx.fillStyle = gradient;
  tempCtx.fillRect(0, 0, size, size);

  // Add particle effect dots with medium contrast
  tempCtx.fillStyle = 'rgba(30, 30, 30, 0.8)'; // Dark particles for better visibility
  for (let i = 0; i < 30; i++) {
    const drawX = Math.random() * size;
    const drawY = Math.random() * size;
    const radius = Math.random() * 2 + 0.5;

    tempCtx.beginPath();
    tempCtx.arc(drawX, drawY, radius, 0, Math.PI * 2);
    tempCtx.fill();
  }

  // Add some glowing particles with better contrast
  for (let i = 0; i < 10; i++) {
    const drawX = Math.random() * size;
    const drawY = Math.random() * size;
    const radius = Math.random() * 4 + 1;

    // Create glow effect with medium tones
    const glowGradient = tempCtx.createRadialGradient(
      drawX,
      drawY,
      0,
      drawX,
      drawY,
      radius * 3
    );
    glowGradient.addColorStop(0, 'rgba(100, 100, 100, 0.8)'); // Medium gray
    glowGradient.addColorStop(0.5, 'rgba(100, 100, 100, 0.3)');
    glowGradient.addColorStop(1, 'rgba(100, 100, 100, 0)');

    tempCtx.fillStyle = glowGradient;
    tempCtx.beginPath();
    tempCtx.arc(drawX, drawY, radius * 3, 0, Math.PI * 2);
    tempCtx.fill();

    // Core particle with good contrast
    tempCtx.fillStyle = 'rgba(50, 50, 50, 0.9)'; // Dark gray for visibility
    tempCtx.beginPath();
    tempCtx.arc(drawX, drawY, radius, 0, Math.PI * 2);
    tempCtx.fill();
  }

  // Create stylized "PFX" text with better contrast
  tempCtx.fillStyle = 'rgba(30, 30, 30, 0.95)'; // Dark text for better visibility
  tempCtx.font = 'bold 32px Arial';
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';

  // Add text shadow/glow with medium contrast
  tempCtx.shadowColor = 'rgba(100, 100, 100, 0.5)';
  tempCtx.shadowBlur = 10;
  tempCtx.shadowOffsetX = 0;
  tempCtx.shadowOffsetY = 0;

  tempCtx.fillText('PFX', size / 2, size / 2);

  // Add connecting lines between some particles for network effect
  tempCtx.strokeStyle = 'rgba(60, 60, 60, 0.4)'; // Medium gray lines
  tempCtx.lineWidth = 1;
  tempCtx.beginPath();

  // Create some random connecting lines
  for (let i = 0; i < 8; i++) {
    const startX = Math.random() * size;
    const startY = Math.random() * size;
    const endX = startX + (Math.random() - 0.5) * 60;
    const endY = startY + (Math.random() - 0.5) * 60;

    tempCtx.moveTo(startX, startY);
    tempCtx.lineTo(endX, endY);
  }
  tempCtx.stroke();

  // Reset shadow
  tempCtx.shadowColor = 'transparent';
  tempCtx.shadowBlur = 0;

  return tempCanvas.toDataURL();
}