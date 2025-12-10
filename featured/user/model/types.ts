export interface User {
  tgId: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  langCode: string | null;
  invitedBy: string | null;
  photoUrl: string | null;
  points: number;
  isActive: boolean;
}
