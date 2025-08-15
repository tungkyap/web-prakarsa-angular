import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Interface for the Typewriter component configuration.
 */
export interface TypewriterConfig {
  /** The text string(s) to be typed in a loop. */
  phrases: string[];
  /** The speed of typing in milliseconds. Defaults to 150. */
  typingSpeed?: number;
  /** The speed of deleting in milliseconds. Defaults to 50. */
  deletingSpeed?: number;
  /** The delay before starting to delete. Defaults to 1500. */
  delayBeforeDelete?: number;
}

@Component({
  selector: 'app-typewriter',
  imports: [CommonModule],
  templateUrl: './typewriter.component.html',
  styleUrl: './typewriter.component.css'
})
export class TypewriterComponent implements OnInit, OnDestroy {
  @Input() config: TypewriterConfig = { phrases: [''] };

  displayedText: string = '';
  private currentPhraseIndex: number = 0;
  private isTyping: boolean = true;
  private typingTimer: any;

  ngOnInit(): void {
    if (this.config && this.config.phrases && this.config.phrases.length > 0) {
      this.animateText();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
  }

  /**
   * The main animation loop for typing and deleting text.
   */
  private animateText(): void {
    const currentPhrase = this.config.phrases[this.currentPhraseIndex];
    const typingSpeed = this.config.typingSpeed || 150;
    const deletingSpeed = this.config.deletingSpeed || 50;
    const delayBeforeDelete = this.config.delayBeforeDelete || 1500;

    if (this.isTyping) {
      // Typing mode
      if (this.displayedText.length < currentPhrase.length) {
        this.displayedText += currentPhrase.charAt(this.displayedText.length);
        this.typingTimer = setTimeout(() => this.animateText(), typingSpeed);
      } else {
        // Switch to deleting mode after a delay
        this.isTyping = false;
        this.typingTimer = setTimeout(() => this.animateText(), delayBeforeDelete);
      }
    } else {
      // Deleting mode
      if (this.displayedText.length > 0) {
        this.displayedText = currentPhrase.substring(0, this.displayedText.length - 1);
        this.typingTimer = setTimeout(() => this.animateText(), deletingSpeed);
      } else {
        // Switch back to typing mode and move to the next phrase
        this.isTyping = true;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.config.phrases.length;
        this.typingTimer = setTimeout(() => this.animateText(), typingSpeed);
      }
    }
  }
}
