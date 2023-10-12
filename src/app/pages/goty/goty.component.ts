import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces';

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
}
