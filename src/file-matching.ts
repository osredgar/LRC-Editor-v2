export type SupportedAudio = File;

const AUDIO_EXTENSIONS = /\.(m4a|mp3|wav|ogg|flac|aac)$/i;

export function findMatchingLyrics(files: readonly File[], audio: SupportedAudio): File | undefined {
  const baseName = audio.name.replace(/\.[^.]+$/, "");
  // LRC is intentionally checked first when both files exist.
  return files.find((file) => file.name === `${baseName}.lrc`)
    ?? files.find((file) => file.name === `${baseName}.txt`);
}

export function findAudio(files: readonly File[]): SupportedAudio | undefined {
  return files.find((file) => file.type.startsWith("audio/") || AUDIO_EXTENSIONS.test(file.name));
}
