import { CreateBoardDTO } from "../dtos/createBoardDto";
import { BoardRepository } from "../repositories/BoardRepository";

class BoardService {
  constructor(private repository: BoardRepository) {}

  async create(board: CreateBoardDTO) {
    try {
      return this.repository.create(board);
    } catch(error) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }

  async getById(id: string) {
    try {
      return this.repository.getById(id);
    } catch(error) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { BoardService }
