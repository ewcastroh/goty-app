import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public games$?: Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games$ = this.gameService.getNominated();
  }

  public voteGame(game: Game) {
    this.gameService.voteGame(game.id)
      .subscribe({
        next: (resp: any) => {
          Swal.fire({
            title: 'Saved vote',
            text: resp.message,
            imageUrl: game.url,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: game.name,
          });
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.message
          });
        }
      });
  }
}
